#!/usr/bin/env -S node
import path from 'path';

import invariant from 'invariant';
import fsExtra from 'fs-extra';
const {ensureDir, readJson, writeJson, readFile, writeFile, copy, pathExists, readdir} = fsExtra;
import { convert } from 'html-to-text';

import ejs from 'ejs';
ejs.delimiter = '?';
ejs.openDelimiter = '<';
ejs.closeDelimiter = '>';
import {globbyStream} from 'globby';
import { v4 as uuidv4 } from 'uuid';


import yaml from 'js-yaml';
import frontMatter from 'front-matter';

import startCase from 'lodash/startCase.js';
import padStart from 'lodash/padStart.js';
import uniq from 'lodash/uniq.js';
import omit from 'lodash/omit.js';
import _ from 'lodash-es';
import {chain} from 'lodash-es';
import { marked } from 'marked';


// https://www.npmjs.com/package/nodemon

class Utils {
  async dir(...target){
       return (await readdir(path.join(...target), { withFileTypes: true }))
       .filter(dirent => dirent.isDirectory())
       .filter(dirent => !dirent.name.startsWith('_'))
       .map(dirent => dirent.name)
  }
  async read(...target){
        const buffer = await readFile(path.join(...target));
        return buffer.toString();
  }
  async write(content, ...target){
    const location = path.join(...target);
    await ensureDir(path.dirname(location))
    await writeFile(location, content)
  }
}

class Sugar extends Utils {
  constructor(){
    super();
  }

  async getPosts(){
    const response = [];
    const categories = await this.dir(this.src);
    for (const category of categories){
      const posts = await this.dir(this.src, category);
      for (const post of posts){
        const buffer = await readFile(path.join(this.src, category, post, 'index.md'))
        const {attributes:data, body:content} = frontMatter(buffer.toString());
        if(!data.guid) throw new Error('post is missing a guid')
        response.push({...data, content:marked(content) });
      }
    }
    return response;
  }

}

class Eternia extends Sugar {
  // Internal
  static version = "0.0.9";
  includer = (originalPath, parsedPath)=>({filename: path.join( path.resolve(this.layouts), originalPath)})

  // Configuration
  layouts = 'layouts';
  src = 'src'
  dest = 'dist';

  //Runtime
  db = [];
  data = {};

  constructor(layouts, src, dest){
    super();
    this.layouts = layouts;
    this.src = src;
    this.dest = dest;
  }

  async initialize(){
    let t0 = performance.now(); //start time
    this.db = await this.getPosts();
    let t1 = performance.now(); //end time
    console.log(`Loaded ${this.db.length} posts in ${t1-t0}.`);


    _.mixin({ 'plaintext': function(html){
      return convert(html, {
        wordwrap: false,
        selectors: [
          { selector: 'hr', format: 'skip' }
        ],
      })
    } });

    const posts = chain(this.db).sortBy('date');


    this.data = {
      website: {title: 'The Cat Pea Community College'},
      network: chain([
        {
          title: 'Backup Server at catpea.org',
          url: 'https://catpea.org',
          superImportant: true,
        },
        {
          title: 'Cat Pea Audio Book (4GB/92hrs)',
          url: 'https://archive.org/details/912-poems',
          veryImportant: true
        },
        {
          title: 'YouTube Playlist',
          url: 'https://www.youtube.com/playlist?list=PLOo-pqnffyOqsK6hf5tFwMqzvhogksrgW',
        }
      ]),
      posts,

      chain,
      iff,
      plaintext: (html)=>convert(html, {wordwrap: false}),
    }

  }

  async static(){
    await copy(path.join(this.layouts, 'static'), path.join(this.dest));
  }

  async index(){
    // this creates an index of all the posts
    let t0 = performance.now(); //start time

    const template = ejs.compile(await this.read(this.layouts, 'index.ejs'), {
      includer: this.includer
    });



    const html = template(this.data);
    await this.write(html, this.dest, 'index.html')

    let t1 = performance.now(); //end time
    console.log(`Templated ${this.db.length} posts in ${t1-t0}.`);
  }

  toc(){
    // this create a more strict index
  }

  tiles(){
    // this lets the user browse by clicking on images
  }

  async posts(){
    let t0 = performance.now(); //start time

    const template = ejs.compile(await this.read(this.layouts, 'post', 'index.ejs'), {
      //root: path.resolve(this.layouts),
      includer: this.includer
    });

    for (const post of this.db){
      const html = template({post, posts: chain(this.db)});
      await this.write(html, this.dest, post.guid, 'index.html')
      // break;
    }

    let t1 = performance.now(); //end time
    console.log(`Templated ${this.db.length} posts in ${t1-t0}.`);
  }

}








const layouts = `layouts`;
const src = `dist/static-port`;
const dest = `dist/new-website`;

const api = new Eternia(layouts, src, dest);
await api.initialize();

api.static(); // render post to /guid/index.html
api.index(); // render main index
// api.posts(); // render post to /guid/index.html
// api.toc(); // render main index
// api.tiles(); // render main index



function iff(data, payload){
  const result = data.value();
  if(result) payload(result);
}

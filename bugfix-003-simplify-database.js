#!/usr/bin/env -S node
import path from 'path';

import invariant from 'invariant';
import fsExtra from 'fs-extra';
const {ensureDir, readJson, writeJson, readFile, writeFile, copy, pathExists} = fsExtra;

import {globbyStream} from 'globby';
import { v4 as uuidv4 } from 'uuid';
import TurndownService from 'turndown';
const turndownService = new TurndownService();

import yaml from 'js-yaml';
import startCase from 'lodash/startCase.js';
import padStart from 'lodash/padStart.js';
import uniq from 'lodash/uniq.js';
import omit from 'lodash/omit.js';


import {remark} from 'remark'
import {visit} from 'unist-util-visit'

let crash = false;
// const portfolio = new Set(["poem-0708","poem-0687","poem-0695","poem-0707","poem-0704","poem-0713","poem-0714","poem-0716","poem-0719","poem-0720","poem-0724","poem-0732","poem-0740","poem-0746","poem-0748","poem-0756","poem-0759","poem-0764","poem-0765","poem-0767","poem-0769","poem-0771","poem-0774","poem-0782","poem-0791","poem-0792","poem-0793","poem-0794","poem-0800","poem-0806","poem-0828","poem-0835","poem-0833","poem-0864","poem-0875","poem-0880","poem-0881","poem-0882","poem-0885","poem-0886","poem-0889","poem-0892","poem-0891","poem-0894","poem-0896","poem-0902","poem-0905","poem-0909","poem-0911"]);
const portfolio = new Set(['poem-0687', 'poem-0695', 'poem-0704', 'poem-0707', 'poem-0708', 'poem-0713', 'poem-0714', 'poem-0716', 'poem-0719', 'poem-0720', 'poem-0724', 'poem-0732', 'poem-0740', 'poem-0746', 'poem-0748', 'poem-0756', 'poem-0759', 'poem-0764', 'poem-0765', 'poem-0767', 'poem-0769', 'poem-0771', 'poem-0774', 'poem-0782', 'poem-0789', 'poem-0791', 'poem-0792', 'poem-0793', 'poem-0794', 'poem-0800', 'poem-0806', 'poem-0822', 'poem-0828', 'poem-0832', 'poem-0833', 'poem-0835', 'poem-0864', 'poem-0875', 'poem-0880', 'poem-0881', 'poem-0882', 'poem-0885', 'poem-0886', 'poem-0889', 'poem-0891', 'poem-0892', 'poem-0894', 'poem-0896', 'poem-0902', 'poem-0905', 'poem-0909', 'poem-0911']);


const databases = ['furkies-purrkies', 'westland-warrior'];

const dest = `/home/meow/Universe/Development/catpea-project/database`;

await ensureDir(dest);


for (const database of databases){
  const index = await readJson(path.join(database,'index.json'));
  const posts = index.data;
  let weight = 100;
  let number = 1;

  for (const id of posts) {
    console.log(`[${number}/${posts.length}] id=${id}`);
    const src = path.join(database, id);
    const name = getIdentity(src);

    await transportContentFile({database, name, src, dest})
    await updateMarkdownLinks({database, name, src, dest});
    await addFrontmatter({database, name, src, dest}, {weight});
    await copyAllFiles({database, name, src, dest});
    await copyImageFiles({database, name, src, dest});

    // TODO: check presence of files mentioned in metadata

    // TODO: Images must be properly resized - this should happen when creating a new record

    weight = weight + 100;
    number = number + 1;
  }

}

function getIdentity(n){
  const database = path.dirname(n);
  const post = path.basename(n);
  const name = post.replace(new RegExp(`^${database}-`),'').replace(/^poetry-/,'poem-')
  return name;
}

async function transportContentFile({database, name, src, dest}){

  const targetBase = path.join(dest, database, name);
  // //console.log(node.url);('targetBase:',targetBase);
  await ensureDir(targetBase);
  const targetFile = path.join(targetBase, 'index.md');

  const configurationFile = path.join(src, 'configuration.json');
  const configurationData = await readJson(configurationFile);

  if( await pathExists(`${src}/content.html`) ){
    const file = `${src}/content.html`;
    const sourceContent = (await readFile(file)).toString();
    //console.log(node.url);(`Convert ${file} ... ${targetFile}`);
    const content = turndownService.turndown(sourceContent);
    await writeFile(targetFile, content)
  } else if( await pathExists(`${src}/content.yaml`) ){
    //const file = `${src}/cache/markdown.md`;
    const file = `/home/meow/Universe/Development/db/dist/simple-md/${configurationData.guid}.md`;
    const content = (await readFile(file)).toString();
    await writeFile(targetFile, content);
  } else if( await pathExists(`${src}/content.md`) ){
    const file = `${src}/cache/html.html`;
    const sourceContent = (await readFile(file)).toString();
    //console.log(node.url);(`Convert ${file} ... ${targetFile}`);
    const content = turndownService.turndown(sourceContent);
    await writeFile(targetFile, content);
  }else{
    throw new Error('unrecognized content format')
  }

}

async function addFrontmatter({database, name, src, dest}, merge){
  const targetBase = path.join(dest, database, name);

  const markdownFile = path.join(targetBase, 'index.md');
  const markdownData = (await readFile(markdownFile)).toString();

  // if(markdownData.startsWith('---')||markdownData.startsWith('***')){
  //   console.log('Front Matter Detected: returning early.');
  //   return;
  // }

  const configurationFile = path.join(src, 'configuration.json');
  const configurationData = await readJson(configurationFile);
  const recordFile = path.join(src, 'cache', 'record.json');
  const recordData = await readJson(recordFile);

  // SKIPPING THESE - WILL BE RECALCULATED LATER
  // if(recordData.images){
  //   configurationData.images  = recordData.images.map(o=>({title:o.title, src:o.url}));
  // }
  // if(recordData.links){
  //   configurationData.links  = recordData.links.map(o=>({title:o.title, url:o.url}));
  // }
  // SKIPPING THESE - WILL BE RECALCULATED LATER
  configurationData.id = name;
  if(configurationData.artworks){
    configurationData.artwork = uniq([configurationData.artwork].concat(configurationData.artworks));
    delete configurationData.artworks;
  }else{
    configurationData.artwork = [configurationData.artwork];
  }

  if(configurationData.attachments){
    configurationData.resources = Object.keys(configurationData.attachments).map(i=>({
      title:startCase(path.basename(i, path.extname(i))),
      src:path.join('files', i),
    }));
    delete configurationData.attachments;
  }

  if(configurationData.created){
    configurationData.lastmod = configurationData.date;
    configurationData.date = configurationData.created;
    delete configurationData.created;
  }

  const frontObject = Object.assign({
    id: null,
    guid: null,
    title: null,
    description: null,
    tags: [database],
    date: null,
    lastmod: null,
    weight: null,
    audio: null,
    image: null,
    images: null, // an array of paths to images related to the page; used by internal templates such as _internal/twitter_cards.html.
    artwork: null,
    resources: null,
    features: {},
    draft: false,
  }, configurationData, merge);


  if(database == 'westland-warrior'){
    frontObject.features.youtubeThumbnails=true;
  }
  if(portfolio.has(configurationData.id)){
    frontObject.features.portfolioJpg=true;
  }

  let omited = [];
  for (const key of Object.keys(frontObject)) {
    if(frontObject[key]===null){
      omited.push(key)
    } else if( Array.isArray(frontObject[key]) && frontObject[key].filter(i=>i).length == 0 ){
      omited.push(key)
    }
  }
  const frontObjectClean = omit(frontObject, omited )

  let markdown = '';
  markdown += '---\n';
  // markdown += yaml.dump(frontObjectClean);
  markdown += yaml.dump(frontObject);
  markdown += '---\n';
  markdown += '\n';
  markdown += markdownData;




  await writeFile(markdownFile, markdown)
}

async function copyAllFiles({database, name, src, dest}){
  const source = path.join(src, 'files');
  const target = path.join(dest, database, name, 'files');
  if(!(await (pathExists(target)))) await copy(source, target);
}

async function copyImageFiles({database, name, src, dest}){
  const configurationFile = path.join(src, 'configuration.json');
  const configurationData = await readJson(configurationFile);

  await copy(
    path.join(src, 'files', configurationData.image),
    path.join(dest, database, name, 'files', configurationData.image)
  );

  for(const size of ['sm','md','lg']){
    await copy(
      path.join(src, 'cache', size +'-'+ configurationData.image),
      path.join(dest, database, name, 'files', size +'-'+ configurationData.image)
    );
  }

}

async function updateMarkdownLinks({database, name, src, dest}){
  const targetBase = path.join(dest, database, name);
  const markdownFile = path.join(targetBase, 'index.md');
  let markdownData = (await readFile(markdownFile)).toString();

  const updatedMarkdownBuffer = await remark()
  .data('settings', {rule: '-'})
  .use(fixImagePaths)
  .use(fixLocalLinks)
  .process(markdownData);

  const updatedMarkdownString = (updatedMarkdownBuffer).toString();

  if(markdownData != updatedMarkdownString){
    await writeFile(markdownFile, updatedMarkdownString);
  }

}

function fixImagePaths() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (
        parent &&
        typeof index === 'number' &&
        (
          node.type === 'image'
          //  ||
          // node.type === 'link' ||
          // node.type === 'linkReference' ||
          // node.type === 'imageReference' ||
          // node.type === 'definition'
        )
      ) {
          // {
          // type: 'image',
          // url: 'https://example.com/favicon.ico',
          // title: 'bravo',
          // alt: 'alpha'
          // }

          if(node.url.startsWith('/image/')){
            console.log(node.url);(node.url);
            node.url = node.url.replace(/^\/image\//, 'files/')
          }


      }
    })

    //squeezeParagraphs(tree)
  }
}

function fixLocalLinks() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (
        parent &&
        typeof index === 'number' &&
        (
          node.type === 'link'
          //  ||
          // node.type === 'link' ||
          // node.type === 'linkReference' ||
          // node.type === 'imageReference' ||
          // node.type === 'definition'
        )
      ) {
          // {
          // type: 'image',
          // url: 'https://example.com/favicon.ico',
          // title: 'bravo',
          // alt: 'alpha'
          // }

          if(node.url.startsWith('http://') || node.url.startsWith('https://') ){
          }else if(node.url.startsWith('/image/')){
            node.url = node.url.replace(/^\/image\//, 'files/')
          }else if(node.url.startsWith('/audio/')){
            node.url = node.url.replace(/^\/audio\//, 'files/')
          }


      }
    })

    //squeezeParagraphs(tree)
  }
}

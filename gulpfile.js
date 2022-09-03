import path from 'path';

import gulp from 'gulp';
const {src, dest, series, parallel} = gulp;

import fsextra from "fs-extra";
const { readJson, readJsonSync, writeJson } = fsextra;

import each from 'gulp-each';

import TurndownService from 'turndown';
const turndownService = new TurndownService();

import yaml from 'js-yaml';
import startCase from 'lodash/startCase.js';
import uniq from 'lodash/uniq.js';
import omit from 'lodash/omit.js';

/*
  gulp-json-editor

gulp-clean
gulp-if
  gulp-changed
  https://www.npmjs.com/package/gulp-newer
*/





const test = (data) => new Promise((resolve, reject) => {

  console.log(data);
  resolve()

});


function test2(cb) {
  // place code for your default task here
  cb();
}



// .pipe(changed('dist/hugo-port', {extension: '.md'}))
// .pipe(rename(newPath => path.join(path.dirname(newPath), path.basename(newPath, '.html'), 'index.md'))))
// .pipe(dest('dist/hugo-port/content/westland-warrior'))

function convertHtmlToMarkdown(book){
  return src(`${book}/*/content.*`)
  .pipe(each(html2md))
  .pipe(each(configurationFrontmatter))
  .pipe(dest(`dist/hugo-port/${book}`))
}

function copyFilesDirectory(book){
  return src(`${book}/*/files/*`)
  .pipe(each(renamer))
  .pipe(dest(`dist/hugo-port/${book}`))
}



function html2md(content, file, callback) {
      // convert to yaml - IF NEEDED
      if(file.extname === '.html'){
        content = turndownService.turndown(content);
        file.extname = '.md';
      }
      callback(null, content);
}

function configurationFrontmatter(content, file, callback) {
    // console.log(file.path);
    const bookName = file.path.split('/')[6];
    const configurationFile = path.join(path.dirname(file.path), 'configuration.json');
    const configurationData = readJsonSync(configurationFile);

    const recordFile = path.join(path.dirname(file.path), 'cache', 'record.json');
    const recordData = readJsonSync(recordFile);


    if(recordData.images){
      configurationData.images  = recordData.images.map(o=>({title:o.title, src:o.url}));

    }

    if(configurationData.artworks){
      configurationData.artwork = uniq([configurationData.artwork].concat(configurationData.artworks));
    }

    if(configurationData.attachments){
      configurationData.resources = Object.keys(configurationData.attachments).map(i=>({
        title:startCase(path.basename(i, path.extname(i))),
        src:path.join('files', i),
      }));
      delete configurationData.attachments;
    }

    if(configurationData.created){
      configurationData.date = configurationData.created;
      configurationData.lastmod = configurationData.date;
    }

    const frontObject = Object.assign({
      id: null,
      guid: null,
      title: null,
      description: null,
      tags: [bookName],
      date: null,
      lastmod: null,
      audio: null,
      image: null,
      images: null, // an array of paths to images related to the page; used by internal templates such as _internal/twitter_cards.html.
      artwork: null,
      resources: null,
      draft: false,
    }, configurationData);

    const omited = Object.keys(frontObject).filter(key=>frontObject[key]===null);
    const frontObjectClean = omit(frontObject, omited )

    let markdown = '';
    markdown += '---\n';
    markdown += yaml.dump(frontObjectClean);
    markdown += '---\n';
    markdown += '\n';
    markdown += content;


    file.stem = 'index';
    file.dirname = path.join( path.dirname(file.dirname), frontObject.guid );


    callback(null, markdown);
}

function renamer(content, file, callback) {
    const bookName = file.path.split('/')[6];
    const configurationFile = path.join(path.dirname(file.path), '..', 'configuration.json');
    const configurationData = readJsonSync(configurationFile);
    file.dirname = path.join( path.dirname(file.dirname), '..', configurationData.guid, 'files' );
    callback(null, content);
}

export default parallel(
  // TODO:  RENAME IMAGE PATHS TO WHATEVER ... probably from /image/... to file/...
  series(
    ()=>convertHtmlToMarkdown('tests')
  ),

  ()=>copyFilesDirectory('tests')

);


// https://gohugo.io/content-management/page-resources/

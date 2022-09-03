#!/usr/bin/env -S node
import path from 'path';
import invariant from 'invariant';
import { readJson, writeJson } from "fs-extra-promise-es6";
import {globbyStream} from 'globby';
import { v4 as uuidv4 } from 'uuid';

const sourceDirectories = ['furkies-purrkies/*/configuration.json', 'westland-warrior/*/configuration.json'];
const globbyOptions = {};

for await (const path of globbyStream(sourceDirectories, globbyOptions)) {
 console.log(path);
 const configurationObject = await readJson(path);

 if(!configurationObject.guid){
   // configurationObject.guid = uuidv4();
   // writeJson(path, configurationObject, {spaces: 2})
 }

}

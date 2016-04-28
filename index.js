#!/usr/bin/env node

'use strict';

const spawn = require('child_process').spawn;
const HOME = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
const find = spawn('find', [HOME, '-name', 'node_modules', '-type', 'd']);
const xargs = spawn('xargs', ['du', '-hc']);
var duData;

find.stdout.on('data', (data) => {
  xargs.stdin.write(data);
});

find.on('close', (code) => {
  if (code !== 0) {
    console.log(`find process exited with code ${code}`);
  }
  xargs.stdin.end();
});

xargs.stdout.on('data', (data) => {
  // we can throw away the old buffer data, all we want is the summary total
  // which is always the final chunk sent
  duData = `${data}`;
});

xargs.on('close', (code) => {
  var total = duData.replace("total", "").trim();
  if (total.length > 0) {
    console.log(`Only ${total} of node_modules? More weight!`);
  } else {
    console.log('Error determining total space taken up by node_modules.');
  }
});

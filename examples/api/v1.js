#!/usr/bin/env node

var program = require('../..');

program
  .command('install')
  .option('-f, --force', 'force installation')
  .action(function(options) {
    console.log("install");
  });

program.parse(process.argv);

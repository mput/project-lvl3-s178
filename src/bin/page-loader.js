#!/usr/bin/env node

import program from 'commander';
import pageLoader from '../';

program
  .version('0.0.1')
  .description('Downloads entire website for offline viewing.')
  .option('-o --output [dir]', 'Specify an output directory.')
  .arguments('<url>')
  .action((url, options) => {
    pageLoader(url, options.output).catch((err) => {
      console.error(err);
    });
  })
  .parse(process.argv);
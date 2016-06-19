#!/usr/bin/env node
'use strict';
const meow = require('meow');
const repeating = require('repeating');

const cli = meow(`
	Usage
	  $ repeating <count> [string]

	Examples
	  $ echo "foo$(repeating 10)bar"
	  foo          bar
	  $ repeating 3 'unicorn '
	  unicorn unicorn unicorn
`, {
	string: ['_']
});

if (cli.input.length === 0) {
	console.error('Specify how many times to repeat the string');
	process.exit(1);
}

console.log(repeating(Number(cli.input[0]), cli.input[1]));

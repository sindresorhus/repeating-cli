#!/usr/bin/env node
'use strict';
var meow = require('meow');
var repeating = require('repeating');

var cli = meow({
	help: [
		'Usage',
		'  $ repeating <string> <count>',
		'',
		'Example',
		'  $ repeating \'unicorn \' 2',
		'  unicorn unicorn '
	]
});

if (cli.input.length === 0) {
	console.error('Specify a `string` and `count`');
	process.exit(1);
}

if (cli.input.length === 1) {
	console.error('Specify how many times to repeat the string');
	process.exit(1);
}

console.log(repeating(cli.input[0], Number(cli.input[1])));

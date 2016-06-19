import test from 'ava';
import execa from 'execa';

test(async t => {
	t.is(await execa.stdout('./cli.js', ['2', 'x']), 'xx');
});

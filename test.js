import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['2', 'x']);
	t.is(stdout, 'xx');
});

import test from 'ava';
import uniqueSampler from './';

test('main', t => {
  const testLength = 1000;
  const array = Array.from({length: testLength}, (v, i) => i);
  const clone = array.slice();
  const sampler = uniqueSampler(array);
  const sampledArray = Array.from({length: testLength}, sampler);

  t.deepEqual(array, clone);
  t.notDeepEqual(array, sampledArray);
  t.deepEqual(array.sort(), sampledArray.sort());
  t.throws(sampler);
})
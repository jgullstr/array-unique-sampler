# array-unique-sampler [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jgullstr/array-unique-sampler/blob/master/LICENSE)

Sample random unique values from an array.

## Usage

```js
import uniqueSampler from 'array-unique-sampler';

const array = ['a','b','c'];

// Sample single values.
const sample = uniqueSampler(array);

sample() // 'b'
sample() // 'a'
sample() // 'c'
sample() // All values sampled, throws error.

// Sample several values.
const samples = Array.from({length: 2}, uniqueSampler(array)) // ['c', 'b']
```
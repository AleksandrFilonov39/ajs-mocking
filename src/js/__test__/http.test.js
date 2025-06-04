import fetchData from '../http';

test('throws on fetchData', () => {
  expect(() => {
    fetchData('url');
  }).toThrow('Mock this!');
});
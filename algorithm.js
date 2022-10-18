const miniMaxSum = (array) => {
  const min = array.slice(0, array.length - 1).reduce((prev, cur) => prev + cur, 0);
  const max = array.slice(1, array.length).reduce((prev, cur) => prev + cur, 0);
  return min.toString() + ' ' + max.toString();
};

const array1 = [1, 3, 5, 7, 9];
const array2 = [1, 2, 3, 4, 5];

array1.sort((min, max) => min - max);
array2.sort((min, max) => min - max);

miniMaxSum(array1);
miniMaxSum(array2);

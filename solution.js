
function cubeOdd(arr) {
  if (arr.every(n => n % 2 === 0)) return 0;
  if (arr.every(n => n === parseInt(n))) {
  return arr.filter(n => n % 2 === 1 || n % 2 === -1).map(n => n * n * n).reduce((runTotal, val) => runTotal + val);
  }
  return undefined;
  }



function mutateMyStrings(stringOne, stringTwo) {
  let stringOneArray = stringOne.split('');
  let stringTwoArray = stringTwo.split('');

  let result = (stringOne + '\n');

  for (i = 0; i < stringOneArray.length; i++) {

    if (stringOneArray[i] !== stringTwoArray[i]) {
      stringOneArray[i] = stringTwoArray[i];
      result = result.concat(stringOneArray.join('') + '\n');
    }
  }
  return result;

}

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

const updateLight = current => {
  return {
    red: 'green',
    yellow: 'red',
    green: 'yellow'
  }[current];
}

SELECT
  SQRT(number1) AS root,
  LOG(number2) AS log
FROM
  decimals


function filter_list(l) {
  return l.filter(Number.isInteger);

}


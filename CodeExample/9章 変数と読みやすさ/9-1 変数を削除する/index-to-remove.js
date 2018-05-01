// 中間結果が冗長
let removeOne = function (array, valueToRemove) {
  let indexToRemove = null;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === valueToRemove) {
      indexToRemove = i;
      break;
    }
  }
  if (indexToRemove != null) {
    array.splice(indexToRemove, 1);
  }
}

/*******************
 改善例
********************/
// 中間結果の変数は削除できる
let removeOne = function (array, valueToRemove) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === valueToRemove) {
      array.splice(indexToRemove, 1);
      return;
    }
  }
}

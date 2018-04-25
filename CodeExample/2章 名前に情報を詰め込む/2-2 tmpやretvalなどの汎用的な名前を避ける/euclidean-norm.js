const euclideanNorm = function (v) {
  // retValがどのような値なのかわからない
  let retVal = 0.0;
  for (let i = 0; i < v.length; i++) {
    retVal += v[i] * v[i];
  }
  return retVal;
}

/*******************
 改善例
********************/
const euclideanNorm = function (v) {
  // 2乗の合計を表しているものであることを示す
  let sumSquares = 0.0;
  for (let i = 0; i < v.length; i++) {
    sumSquares += v[i] * v[i];
  }
  return sumSquares;
}

// 読めるか
return exponent >= 0 ? mantissa * Math.pow(2, exponent) : mantissa * Math.pow(2, -exponent);

/*******************
 改善例
********************/
// 基本はif falseを使う
if (exponent >= 0) {
  return mantissa * Math.pow(2, exponent);
} else {
  return mantissa * Math.pow(2, -exponent);
}

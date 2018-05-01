// JavaScriptではスコープがブロックの外側にこぼれでる
if (request){
  request.values.forEach(function (val) {
    if (val > 0) {
      exampleValue = value;
      break;
    }
  });
}
logger.log(exampleValue);

/*******************
 改善例
********************/
// 適当な場所で変数を定義してやる
let exampleValue = null;
if (request){
  request.values.forEach(function (val) {
    if (val > 0) {
      exampleValue = value;
      break;
    }
  });
}
logger.log(exampleValue);
// 高レベルのコードと低レベルの問題が混在している
const onSuccess = function (responseData) {
  let str = "{\n";
  for (const key in responseData) {
    str += " " + key + " = " + responseData[key] + "\n";
  }
  alert(str + "}");

  // 引き続きresponseDataの処理  
}

/*******************
 改善例
********************/
// 文字列成形部分をデータ処理部分を分離する
const onSuccess = function(responseData){
  formatPretty(responseData)

  // 引き続きresponseDataの処理  
}

const formatPretty = function(obj){
  // 機能の追加も容易にできる
  // null・undefined・文字列・非オブジェクトを処理する
  if(obj === null) return "null";
  if(obj===undefined) return "undefined";
  if(typeof obj === "string") return '"' + obj + '"';
  if(typeof obj !== "object") return String(obj);

  let str = "{\n";
  for (const key in obj) {
    str += " " + key + " = " + responseData[key] + "\n";
  }
  return (str + "}");  
}

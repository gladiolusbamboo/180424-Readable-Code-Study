// グローバル変数を使わない（JavaScript）
let submitted = false;

const submitForm = function (formName) {
  if (submitted) {
    return; // 二重投稿禁止
  }
  // 処理
  submitted = true;
};

/*******************
 改善例
********************/
// クロージャを使用する（むずい…）
const submitForm = (function () {
  let submitted = false; // この変数は以下の関数からしかアクセスされない
  return function (formName) {
    if (submitted) {
      return; // 二重投稿禁止
    }
    // 処理
    submitted = true;
  }
}());
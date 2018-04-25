// 単位がミリ秒であることがわからない

// 処理に要する時間を計測する
const start = (new Date()).getTime();
// 処理
const elapsed = (new Date()).getTime() - start;
console.log('読み込み時間：' + elapsed + '秒');

/*******************
 改善例
********************/
// 変数名で単位を明示する

// 処理に要する時間を計測する
const start_ms = (new Date()).getTime();
// 処理
const elapsed_ms = (new Date()).getTime() - start_ms;
console.log('読み込み時間：' + elapsed_ms + '秒');

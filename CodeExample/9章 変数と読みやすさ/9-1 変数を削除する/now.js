// 一時変数の必要がない
const now = new Date();
rootMessage.lastViewTime = now;

/*******************
 改善例
********************/
// 不必要な一時変数を削除する

rootMessage.lastViewTime = new Date();

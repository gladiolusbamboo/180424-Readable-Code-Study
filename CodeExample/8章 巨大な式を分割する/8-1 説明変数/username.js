// いっぺんに言われてもわからない
if (line.split(':')[0].strip() == "root") {
  // 処理
}

/*******************
 改善例
********************/
// 説明変数を使う
username = line.split(':')[0].strip();
if (username == "root") {
  // 処理
}


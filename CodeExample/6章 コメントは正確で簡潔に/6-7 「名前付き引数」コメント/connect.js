// 引数の意味がわからない
connect(10, false)

/*******************
 改善例
********************/
// 名前付き引数呼び出しっぽくする（…見やすいか？）

connect(/* timeout_ms = */ 10, /* use_encryption = */ false);

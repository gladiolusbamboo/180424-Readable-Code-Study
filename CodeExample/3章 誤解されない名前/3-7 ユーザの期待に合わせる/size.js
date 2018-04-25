// sizeメソッドに重い処理を書かない
// list.size()は重い処理
while(list.size() > max_size){
  list.pop();
}

/*******************
 改善例
********************/
// メソッド名を変更する
while(list.countSize() > max_size){
  list.pop();
}

// 制御フロー変数は不要な場合が多い
let done = false;

while(!done){
  // 処理
  if(flag){
    done = true;
    continue;
  }
}

/*******************
 改善例
********************/
// breakを使用する
let done = false;

while(!done){
  // 処理
  if(flag){
    break;
  }
}

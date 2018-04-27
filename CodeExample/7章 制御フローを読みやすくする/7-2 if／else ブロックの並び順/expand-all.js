// expand_allが気になる（せやろか）

if(!url.hasQueryParameter("expand_all")){
  // 処理1
}else{
  // 処理2
}

/*******************
 改善例
********************/
// 関心を引く条件を先に処理する

if(url.hasQueryParameter("expand_all")){
  // 処理2
}else{
  // 処理1
}

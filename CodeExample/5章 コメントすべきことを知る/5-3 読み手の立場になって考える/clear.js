// なぜswapするのか不明
function clear(data){
  swap(data);
}

/*******************
 改善例
********************/
// 読み手がわからなさそうな部分にコメントをつける（わからないけど）

function clear(data){
  // ベクタのメモリを開放する
  swap(data);
}

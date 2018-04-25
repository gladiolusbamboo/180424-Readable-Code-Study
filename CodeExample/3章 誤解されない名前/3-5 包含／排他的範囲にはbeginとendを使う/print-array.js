// stopの境界が曖昧
function printArray(start, stop){
  // 処理
}

/*******************
 改善例
********************/
// begin&endを使うとbeginは包含的な境界、
// endは排他的な境界を示すことを明確にする
function printArray(begin, end){
  // 処理
}

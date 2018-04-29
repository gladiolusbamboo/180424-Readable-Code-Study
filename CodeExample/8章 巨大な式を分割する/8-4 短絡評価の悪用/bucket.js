// かっこつけない（短絡評価の悪用）
if(!(bucket = findBucket(key)) || bucket.isOccupied()){
  // 処理
}

/*******************
 改善例
********************/
// わかりやすく書く
bucket = findBucket(key);
if(bucket != null){
  result = bucket.isOccupied()
}

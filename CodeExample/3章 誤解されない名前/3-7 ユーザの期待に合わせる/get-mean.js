// getメソッドに重い処理を書かない
class StatisticsCollector{
  getMean(){
    // すべてのサンプルを走査して平均値を返す重い処理    
  }
}

/*******************
 改善例
********************/
// メソッド名を変更する
class StatisticsCollector{
  computeMean(){
    // すべてのサンプルを走査して平均値を返す重い処理    
  }
}

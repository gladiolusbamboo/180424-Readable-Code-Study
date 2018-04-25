// yomidzurai
class StatsKeeper {
  // doubleを記録するクラスと
  constructor(val) { /* すばやく統計を出すメソッド
*/
    this.val = val;
  }
  add(d) {
    // 処理
  }
  average() {
    // 処理
  }
}

/*******************
 改善例
********************/
// 適切な位置にコメントを書く
// doubleを記録するクラスと
// すばやく統計を出すメソッド
class StatsKeeper {
  constructor(val) {
    this.val = val;
  }
  add(d) {
    // 処理
  }
  average() {
    // 処理
  }
}

// 一部のメソッドでしか使用しない変数をメンバ変数にしない
class LargeClass {
  constructor() {
    this.str_ = null;
  }

  method1() {
    this.str_ = 'text1';
    method2();
    // 処理
  }

  method2(){
    // str_を使用する処理
  }

  // str_を使用しないメソッドがたくさんある
};

/*******************
 改善例
********************/
// ローカル変数にする
class LargeClass {
  constructor() {
    this.str_ = null;
  }

  method1() {
    let str = 'text1';
    method2(str);
    // 処理
  }

  method2(txt){
    // txtを使用する処理
  }

  // ︙
};

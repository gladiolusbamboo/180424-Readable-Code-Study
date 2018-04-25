class Thread{
  // 不可逆処理なのか再開できるのか曖昧
  stop(){
    // 処理
  }
}

/*******************
 改善例
********************/
class Thread{
  // 不可逆処理
  kill(){
    // 処理
  }
}

class Thread{
  // 一時停止
  pause(){
    // 処理
  }
}

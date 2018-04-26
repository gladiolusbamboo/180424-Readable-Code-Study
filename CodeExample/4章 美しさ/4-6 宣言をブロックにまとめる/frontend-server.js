// メソッドの概要がわかりづらい
class FrontendServer{
  constructor(){}
  viewProfile(request){
    // 処理
  }
  openDatabase(location,user){
    // 処理
  }
  saveProfile(request){
    // 処理
  }
  extractQueryParam(request, param){
    // 処理
  }
  replyOK(request,html){
    // 処理
  }
  findFriends(request){
    // 処理
  }
  replyNotFound(request, error){
    // 処理
  }
  closeDatabase(location){
    // 処理
  }
}

/*******************
 改善例
********************/
// 適切にグループ化する
class FrontendServer{
  constructor(){}

  // ハンドラ
  viewProfile(request){
    // 処理
  }
  saveProfile(request){
    // 処理
  }
  findFriends(request){
    // 処理
  }

  // リクエストとリプライのユーティリティ
  extractQueryParam(request, param){
    // 処理
  }
  replyOK(request,html){
    // 処理
  }
  replyNotFound(request, error){
    // 処理
  }

  // データベースのヘルパー
  openDatabase(location,user){
    // 処理
  }
  closeDatabase(location){
    // 処理
  }
}

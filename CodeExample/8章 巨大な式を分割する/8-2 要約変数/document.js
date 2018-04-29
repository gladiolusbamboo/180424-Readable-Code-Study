// 理解するのにちょっと時間がかかる
if(request.user.id == document.ownerId){
  // 処理
}
// 長々とした処理
if(request.user.id == document.ownerId){
  // 処理
}

/*******************
 改善例
********************/
// 要約変数を使う（分かりやすいかなぁ…？）
const userOwnsDocument = (request.user.id == document.ownerId)

if(userOwnsDocument){
  // 処理
}
// 長々とした処理
if(userOwnsDocument){
  // 処理
}

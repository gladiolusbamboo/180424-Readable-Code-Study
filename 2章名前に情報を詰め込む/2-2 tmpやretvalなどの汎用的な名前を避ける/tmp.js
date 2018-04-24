// tmpがどんなデータなのかわからない
let tmp = user.getName();
tmp += " " + user.getPhoneNumber();
tmp += " " + user.getEmail();
// 処理
template.set("user_info", tmp);

/*******************
 改善例
********************/
// 一時変数がユーザー情報であることを示す
let user_info = user.getName();
user_info += " " + user.getPhoneNumber();
user_info += " " + user.getEmail();
// 処理
template.set("user_info", user_info);

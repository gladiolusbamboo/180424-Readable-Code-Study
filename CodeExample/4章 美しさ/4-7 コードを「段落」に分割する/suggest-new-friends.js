// わかりにくい

// ユーザのメール帳をインポートして、システムのユーザと照合する。
// そして、まだ友だちになっていないユーザの一覧を表示する
function suggestNewFriends(user, email_password){
  const friends = user.friends();
  const friendsEmails = getFriendsEmails(friends);
  const contacts = getContacts(user.email, email_password);
  const contactsEmails = getContactsEmails(contacts);
  const nonFriendsEmails = contactsEmails - friendsEmails;
  const suggestedFriends = getSuggestedFriends(nonFriendsEmails);
  let display = {};
  display['user'] = user;
  display['friends'] = friends;
  display['suggestedFriends'] = suggestedFriends;
  render('suggested_friends.html', display);
}

/*******************
 改善例
********************/
// コードを段落に分割する

function suggestNewFriends(user, email_password){
  // ユーザの友達のメールアドレスを取得する
  const friends = user.friends();
  const friendsEmails = getFriendsEmails(friends);

  // ユーザのメールアカウントから全てのメールアドレスをインポートする
  const contacts = getContacts(user.email, email_password);
  const contactsEmails = getContactsEmails(contacts);

  // まだ友だちになっていないユーザを探す
  const nonFriendsEmails = contactsEmails - friendsEmails;
  const suggestedFriends = getSuggestedFriends(nonFriendsEmails);

  // それをページに表示する
  let display = {};
  display['user'] = user;
  display['friends'] = friends;
  display['suggestedFriends'] = suggestedFriends;
  
  render('suggested_friends.html', display);
}

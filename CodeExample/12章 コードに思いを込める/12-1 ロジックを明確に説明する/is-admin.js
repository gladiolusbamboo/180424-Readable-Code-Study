// ロジックを理解するのが難しい
const isAdmin = isAdminRequest();

if (document) {
  if (!isAdmin && document['username'] !== session['username']) {
    return notAuthorized();
  }
} else {
  return notAuthorized();
}

/*******************
 改善例
********************/
// ロジックを単純にする

if (isAdminRequest()) {
  //権限あり
} else if (document && document['username'] === session['username']) {
  //権限あり
} else {
  return notAuthorized();
}
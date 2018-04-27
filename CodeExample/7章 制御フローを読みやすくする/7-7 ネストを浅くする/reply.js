// ？？？？？？？？
if (userResult == SUCCESS) {
  if (permissionResult != SUCCESS) {
    reply.writeErrors("error reading permissions");
    reply.done();
    return;
  }
  reply.writeErrors("");
} else {
  reply.writeErrors(userResult);
}
reply.done();

/*******************
 改善例
********************/
// エラー処理を先に出してネストを浅くする

if (userResult != SUCCESS) {
  reply.writeErrors(userResult);
  reply.done();
  return;
}

if (permissionResult != SUCCESS) {
  reply.writeErrors(permissionResult);
  reply.done();
  return;
}

reply.writeErrors("");
reply.done();

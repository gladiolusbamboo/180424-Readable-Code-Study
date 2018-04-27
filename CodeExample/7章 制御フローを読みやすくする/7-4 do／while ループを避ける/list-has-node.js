// do-whileは読みにくい
function listHasNode(node, name, maxLength) {
  do {
    if (node.name().equals(name))
      return true;
    node = node.next();
  } while (node != null && --maxLength > 0);
}

/*******************
 改善例
********************/
// whileで書き直す
function listHasNode(node, name, maxLength) {
  while (node != null && maxLength-- > 0) {
    if (node.name().equals(name))
      return true;
    node = node.next();
  }
  return false;
}

// 難解
function contains(str, substr) {
  if (str != null && substr != null) {
    if (!substr.equals("")) {
      // 処理
    } else {
      return true;
    }
  } else {
    return false;
  }
}

/*******************
 改善例
********************/
// ガード句を使う
function contains(str, substr) {
  if (str == null || substr == null) return false;
  if (substr.equals("")) return true;
  // 処理
}

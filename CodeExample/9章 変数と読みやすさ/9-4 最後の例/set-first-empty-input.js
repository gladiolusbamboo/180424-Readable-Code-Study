// キレイじゃない（らしい）
var setFirstEmptyInput = function (newValue) {
  let found = false;
  let i = 1;
  let elem = document.getElementById('input' + i);
  while (elem !== null) {
    if (elem.value === '') {
      found = true;
      break;
    }
    i++;
    elem = document.getElementById('input' + i);
  }
  if (found) elem.value = newValue;
  return elem;
}

/*******************
 改善例
********************/
// 中間変数のfoundを削除
const setFirstEmptyInput = function (newValue) {
  let i = 1;
  let elem = document.getElementById('input' + i);
  while (elem !== null) {
    if (elem.value === '') {
      elem.value = newValue;
      return elem;
    }
    i++;
    elem = document.getElementById('input' + i);
  }
  return null;
};

// 無理にwhileを使わない
const setFirstEmptyInput = function (newValue) {
  for (let i = i; true; i++) {
    let elem = document.getElementById('input' + i);
    if (elem === null)
      return null; // 検索失敗。空の入力フィールドは見つからなかった。

    if (elem.value === '') {
      elem.value = newValue;
      return elem;
    }
  }
};

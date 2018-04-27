// コードの動作を書いているだけのコメントを書くな

// listを逆順にイテレートする
for (let i = products.length - 1; i >= 0; i--) {
  displayPrice(products[i]);
}

/*******************
 改善例
********************/
// コードの意図を書く

// 値段の高い順に表示する
for (let i = products.length - 1; i >= 0; i--) {
  displayPrice(products[i]);
}

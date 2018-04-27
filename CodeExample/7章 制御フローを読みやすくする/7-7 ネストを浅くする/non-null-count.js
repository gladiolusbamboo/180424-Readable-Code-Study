// ネストが深い
for (let i = 0; i < results.size(); i++) {
  if (results[i] != null) {
    nonNullCount++;

    if (results[i].name != "") {
      // 処理
    }
  }
}

/*******************
 改善例
********************/
// continueを使うことでネストを浅くできることがある

for (let i = 0; i < results.size(); i++) {
  if (results[i] == null) continue;
  nonNullCount++;
  if (results[i].name == "") continue;
  // 処理
}

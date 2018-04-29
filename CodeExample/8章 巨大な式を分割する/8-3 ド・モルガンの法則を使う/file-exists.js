// イミフ
if (!(fileExists && !isProtected)) {
  error("Sorry, could not read file.");
}

/*******************
 改善例
********************/
// ド・モルガンの法則を適用できないか検討してみる
if (!fileExists || isProtected) {
  error("Sorry, could not read file.");
}

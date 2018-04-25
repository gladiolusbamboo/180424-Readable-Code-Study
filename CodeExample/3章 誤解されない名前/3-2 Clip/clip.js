// clip()の具体的な挙動が不明
results = clip(text, length);

/*******************
 改善例
********************/

// 「切り捨て」であることを明確にする
results = removeBackward(text, length);

// 「切り詰め」であることを明確にする
results = truncate(text, length);

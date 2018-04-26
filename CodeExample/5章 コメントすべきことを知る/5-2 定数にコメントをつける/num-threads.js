// 定数の意図がわからない
const NUM_THREADS = 8;
const MAX_RSS_SUBSCRIPTIONS = 1000;
const IMAGE_QUALITY = 0.72;

/*******************
 改善例
********************/
// 定数の意図をコメントする

// 値は「>= 2 * num_processors」で十分
const NUM_THREADS = 8;
// 合理的な限界値。人間はこんなに読めない。
const MAX_RSS_SUBSCRIPTIONS = 1000;
// 0.72ならユーザはファイルサイズと品質の面で妥協できる
const IMAGE_QUALITY = 0.72;

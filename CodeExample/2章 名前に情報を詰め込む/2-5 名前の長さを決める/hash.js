// cがなんのことかわからん
const c = {red: '赤', green: '緑', blue: '青'};
// いろんな長い処理
Show(c);

/*******************
 改善例
********************/
// 変数に必要な情報を入れる
const colorsHash = {red: '赤', green: '緑', blue: '青'};
// いろんな長い処理
Show(colorsHash);

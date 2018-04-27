// やや冗長？
if (hour >= 12) {
  time_str += "pm";
} else {
  time_str += "am";
}

/*******************
 改善例
********************/
// 三項演算子を使う
time_str += (hour >= 12) ? "pm" : "am";
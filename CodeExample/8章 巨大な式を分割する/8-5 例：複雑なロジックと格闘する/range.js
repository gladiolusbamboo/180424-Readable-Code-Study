// ちょっと何言ってるかわからない
class Range {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
  }

  overlapsWith(other) {
    return (begin >= other.begin && begin < other.end) ||
      (end > other.begin && end <= other.end) ||
      (begin <= other.begin && end >= other.end);
  }
}

/*******************
 改善例
********************/
// 反対から考えてみる（うーむ）
class Range {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
  }

  overlapsWith(other) {
    if (other.end <= begin) return false;
    if (other.begin >= end) return false;
  }
}

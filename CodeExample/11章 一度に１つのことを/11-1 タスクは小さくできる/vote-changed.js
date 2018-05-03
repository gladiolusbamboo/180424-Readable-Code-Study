// 数値へのパースとscoreの更新を一気にやっていて読みにくい

const voteChanged = function (oldVote, newVote) {
  const score = getScore();

  if (newVote !== oldVote) {
    if (newVote === 'Up') {
      score += (oldVote === 'Down' ? 2 : 1);
    } else if (newVote === 'Down') {
      score -= (oldVote === 'Up' ? 2 : 1);
    } else if (newVote === '') {
      score += (oldVote === 'Up' ? -1 : 1);
    }
  }

  setScore(score);
};

/*******************
 改善例
********************/
// 数値のパースを別の関数に切り出す
const voteValue = function (vote) {
  if (vote === 'Up') {
    return +1;
  }
  if (vote === 'Down') {
    return -1;
  }
  return 0;
}

const voteChanged = function (oldVote, newVote) {
  const score = getScore();
  score -= voteValue(oldVote);
  score += voteValue(newVote);
  setScore(score);
}
const showNextTip = function () {
  const numTips = $('.tip').size();
  const shownTip = $('.tip:visible');

  const shownTipNum = Number(shownTip.attr('id').slice(4));
  if (shownTipNum === numTips) {
    $('#tip-1').show();
  } else {
    $('#tip-' + (shownTipNum + 1)).show();
  }
  shownTip.hide();
};

/*******************
 改善例
********************/
// jQueryのライブラリを知る・使う
// （果たしてそれは他人がわかりやすいコードだろうか）

const showNextTip = function () {
  // 今見えているヒントを隠す
  const curTip = $('.tip:visible').hide();
  // 次のヒントを見つける
  const nextTip = curTip.next('.tip');
  // ヒントがなくなったら
  if (nextTip.size() === 0) {
    // 最初のヒントに戻る
    nextTip = $('.tip:first');
  }
  // 新しいヒントを表示する
  nextTip.show();
};

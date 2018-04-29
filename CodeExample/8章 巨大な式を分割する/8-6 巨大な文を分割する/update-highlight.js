// ちょっと何言ってるかわからない
const updateHighlight = function (messageNum) {
  if ($("#voteValue" + messageNum).html() === "Up") {
    $("#thumbsUp" + messageNum).addClass("highlighted");
    $("#thumbsDown" + messageNum).removeClass("highlighted");
  } else if ($("#voteValue" + messageNum).html() === "Down") {
    $("#thumbsUp" + messageNum).removeClass("highlighted");
    $("#thumbsDown" + messageNum).addClass("highlighted");
  } else {
    $("#thumbsUp" + messageNum).removeClass("highlighted");
    $("#thumbsDown" + messageNum).removeClass("highlighted");
  }
};

/*******************
 改善例
********************/
// 繰り返しを変数にする

const updateHighlight = function (messageNum) {
  const thumbsUp = $("#thumbsUp" + messageNum);
  const thumbsDown = $("#thumbsDown" + messageNum);
  const voteValue = $("#voteValue" + messageNum).html();
  const hi = "highlighted";

  if (voteValue === "Up") {
    thumbsUp.addClass(hi);
    thumbsDown.removeClass(hi);
  } else if (voteValue === "Down") {
    thumbsUp.removeClass(hi);
    thumbsDown.removeClass(hi);
  } else {
    thumbsUp.removeClass(hi);
    thumbsDown.removeClass(hi);
  }
}
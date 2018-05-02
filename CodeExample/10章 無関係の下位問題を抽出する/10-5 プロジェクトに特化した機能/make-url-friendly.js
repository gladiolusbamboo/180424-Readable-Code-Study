// 高レベルのコードと低レベルの問題が混在している
let business = new Business();
business.name = request.POST["name"];

urlPathName = business.name.lower();
urlPathName = re.sub("\\['\.]\\", "", urlPathName);
urlPathName = re.sub("\\[^a-z0-9]+\\", "-", urlPathName);
urlPathName = urlPathName.strip("-");
business.url = "/biz/" + urlPathName;

/*******************
 改善例
********************/
// 下位問題を抽出し、コードに規則性をもたせる
const CHARS_TO_REMOVE = "\\['\.]\\";
const CHARS_TO_DASH = "\\[^a-z0-9]+\\";

let business = new Business();
business.name = request.POST["name"];
business.url = makeUrlFriendly(business.name);

function makeUrlFriendly(text) {
  text = text.lower();
  text = re.sub(CHARS_TO_REMOVE, urlPathName);
  text = re.sub(CHARS_TO_DASH, "-", urlPathName);
  return text.strip("-");
}
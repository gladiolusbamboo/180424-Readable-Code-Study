// ごちゃごちゃしている
const databaseConnection
let error;
assert(expandFullName(databaseConnection, "Doug Adams", error)
  == "Mr. Douglas Adams");
assert(error == "");
assert(expandFullName(databaseConnection, " Jake Brown ", error)
  == "Mr. Jacob Brown III");
assert(error == "");
assert(expandFullName(databaseConnection, "No Such Guy", error) == "");
assert(error == "no match found");
assert(expandFullName(databaseConnection, "John", error) == "");
assert(error == "more than one result");

/*******************
 改善例
********************/
// ヘルパーメソッドに処理を切り出してやる
checkFullName("Doug Adamas", "Mr. Douglas Adams", "");
checkFullName(" Jake Brown ", "Mr. Jake Brown III", "");
checkFullName("No Such Guy", "", "no match found");
checkFullName("John", "", "more than one result");

function checkFullName(partialName, expectedFullName, expectedError){
  let error;
  const fullName = expandFullName(databaseConnection, partialName, error);
  assert(error == expectedError);
  assert(fullName == expectedFullName);
}

// さらに縦の線を合わせる
checkFullName("Doug Adamas" , "Mr. Douglas Adams"  , "");
checkFullName(" Jake Brown ", "Mr. Jake Brown III" , "");
checkFullName("No Such Guy" , ""                   , "no match found");
checkFullName("John"        , ""                   , "more than one result");

function checkFullName(partialName, expectedFullName, expectedError){
  let error;
  const fullName = expandFullName(databaseConnection, partialName, error);
  assert(error == expectedError);
  assert(fullName == expectedFullName);
}

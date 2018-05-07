// 読みにくいテストを改善する
function test1() {
  let docs = new Array(5);
  for (let i = 0; i < docs.length; i++) {
    docs[i] = new ScoredDocument();
  }

  docs[0].url = "http://example.com";
  docs[0].score = -5.0;
  docs[1].url = "http://example.com";
  docs[1].score = 1;
  docs[2].url = "http://example.com";
  docs[2].score = 4;
  docs[3].url = "http://example.com";
  docs[3].score = -9998.7;
  docs[4].url = "http://example.com";
  docs[4].score = 3.0;

  sortAndFilterDocs(docs);

  assert(docs.length === 3);
  assert(docs[0].score === 4);
  assert(docs[0].score === 3.0);
  assert(docs[0].score === 1);
}

/*******************
 改善１
********************/
// 目障りな繰り返しを関数に切り出す
function test1() {
  let docs = new Array();

  addScoredDoc(docs, -5.0, "http://example.com");
  addScoredDoc(docs, 1, "http://example.com");
  addScoredDoc(docs, 4, "http://example.com");
  addScoredDoc(docs, -9998.7, "http://example.com");
  addScoredDoc(docs, 3, "http://example.com");

  sortAndFilterDocs(docs);

  assert(docs.length === 3);
  assert(docs[0].score === 4);
  assert(docs[0].score === 3.0);
  assert(docs[0].score === 1);
}

function addScoredDoc(docs, score, url) {
  docs.push(new ScoredDocument(score, url));
}

/*******************
 改善２
********************/
// 重要性の低いフィールドを省略する
function test1() {
  let docs = new Array();

  addScoredDoc(docs, -5.0);
  addScoredDoc(docs, 1);
  addScoredDoc(docs, 4);
  addScoredDoc(docs, -9998.7);
  addScoredDoc(docs, 3);

  sortAndFilterDocs(docs);

  assert(docs.length === 3);
  assert(docs[0].score === 4);
  assert(docs[0].score === 3.0);
  assert(docs[0].score === 1);
}

function addScoredDoc(docs, score) {
  docs.push(new ScoredDocument(score, "http://example.com"));
}

/*******************
 改善３
********************/
// 本質のみの最小のテストを作る
function test1() {
  checkScoresBeforeAfter("-5, 1, 4, -99998.7, 3", "4, 3, 1");
}

function checkScoresBeforeAfter(input, expected_output) {
  let docs = scoredDocsFromString(input);
  sortAndFilterDocs(docs);
  const output = scoredDocsToString(docs);
  assert(output == expected_output);
}

function scoredDocsFromString(scores) {
  let docs = new Array();
  let array = convertStringToArray(scores);
  for (let i = 0; i < array.length; i++) {
    addScoredDoc(docs, array[i]);
  }
  return docs;
}

function addScoredDoc(docs, score) {
  docs.push(new ScoredDocument(score, "http://example.com"));
}

function scoredDocsToString(docs) {
  // 省略
}

/*******************
 改善４
********************/
// エラーメッセージを改良する
function test1() {
  checkScoresBeforeAfter("-5, 1, 4, -99998.7, 3", "4, 3, 1");
}

function checkScoresBeforeAfter(input, expected_output) {
  let docs = scoredDocsFromString(input);
  sortAndFilterDocs(docs);
  const output = scoredDocsToString(docs);
  if (output != expected_output) {
    console.error('checkScoresBeforeAdter() Error')
    console.error(`input = ${input}`)
    console.error(`expected_output = ${expected_output}`)
    console.error(`Actual output = ${output}`)
  }
}

function scoredDocsFromString(scores) {
  let docs = new Array();
  let array = convertStringToArray(scores);
  for (let i = 0; i < array.length; i++) {
    addScoredDoc(docs, array[i]);
  }
  return docs;
}

function addScoredDoc(docs, score) {
  docs.push(new ScoredDocument(score, "http://example.com"));
}

function scoredDocsToString(docs) {
  // 省略
}

/*******************
 改善５
********************/
// テスト値を適切な値にする
function test1() {
  checkScoresBeforeAfter("1, 2, -1, 3", "3, 2, 1");
}

function checkScoresBeforeAfter(input, expected_output) {
  let docs = scoredDocsFromString(input);
  sortAndFilterDocs(docs);
  const output = scoredDocsToString(docs);
  if (output != expected_output) {
    console.error('checkScoresBeforeAdter() Error')
    console.error(`input = ${input}`)
    console.error(`expected_output = ${expected_output}`)
    console.error(`Actual output = ${output}`)
  }
}

function scoredDocsFromString(scores) {
  let docs = new Array();
  let array = convertStringToArray(scores);
  for (let i = 0; i < array.length; i++) {
    addScoredDoc(docs, array[i]);
  }
  return docs;
}

function addScoredDoc(docs, score) {
  docs.push(new ScoredDocument(score, "http://example.com"));
}

function scoredDocsToString(docs) {
  // 省略
}

/*******************
 改善６
********************/
// テスト値を機能ごとに複数つくる
function test1() {
  checkScoresBeforeAfter("2, 1, 3", "3, 2, 1");   // ソート
  checkScoresBeforeAfter("0, -0.1, -10", "0");    // マイナスは削除
  checkScoresBeforeAfter("1, -2, 1, -2", "1, 1"); // 重複を許可する
  checkScoresBeforeAfter("", "");                 // 空の入力を許可する
}

function checkScoresBeforeAfter(input, expected_output) {
  let docs = scoredDocsFromString(input);
  sortAndFilterDocs(docs);
  const output = scoredDocsToString(docs);
  if (output != expected_output) {
    console.error('checkScoresBeforeAdter() Error')
    console.error(`input = ${input}`)
    console.error(`expected_output = ${expected_output}`)
    console.error(`Actual output = ${output}`)
  }
}

function scoredDocsFromString(scores) {
  let docs = new Array();
  let array = convertStringToArray(scores);
  for (let i = 0; i < array.length; i++) {
    addScoredDoc(docs, array[i]);
  }
  return docs;
}

function addScoredDoc(docs, score) {
  docs.push(new ScoredDocument(score, "http://example.com"));
}

function scoredDocsToString(docs) {
  // 省略
}

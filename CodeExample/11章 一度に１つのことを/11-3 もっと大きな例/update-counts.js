function updateCounts(hd) {
  // 可能であればExit Stateを見つける
  if (!hd.hasEventLog() || !hd.hasEventLog().hasExitState()) {
    counts["Exit State"]["unknown"]++;
  } else {
    const stateStr = exitStateTypeName(hd.eventLog().exitState());
    counts["Exit State"][stateStr]++;
  }

  // HTTPヘッダがなければ、残りの要素に"unknown"を設定する
  if (!hd.hasHttpHeaders()) {
    counts["Http Response"]["unknown"]++;
    counts["Content-Type"]["unknown"]++;
    return;
  }

  const headers = hd.httpHeaders();

  // HTTPレスポンスをログに記録する。なければ"unknown"と記録する。
  if (!headers.hasResponseCode()) {
    counts["Http Response"]["unknown"]++;
  } else {
    const code = headers.responseCode();
    counts["Http Response"][code]++;
  }

  // Content-Typeをログに記録する。なければ"unknown"と記録する。
  if (!headers.hasContentType()) {
    counts["Content-Type"]["unknown"]++;
  } else {
    const contentType = ContentTypeMime(headers.contentType());
    counts["Content-Type"][contentType]++;
  }
}

/*******************
 改善例
********************/
function updateCounts(hd) {
  // タスク：抽出したい値にデフォルト値を設定する。
  const exitState = "unknown";
  const httpResponse = "unknown";
  const contentType = "unknown";

  // タスク：HttpDownloadから値を１つずつ抽出する
  if(hd.hasEventLog() && hd.eventLog().hasExitState()){
    exitState = exitStateTypeName(hd.eventLog().exitState());
  }
  if(hd.hasHttpHeaders() && hd.httpHeaders().hasResponseCode()){
    httpResponse = hd.httpHeaders().responseCode();
  }
  if(hd.hasHttpHeaders() && hd.httpHeaders().hasContentType()){
    contentType=ContentTypeMime(hd.httpHeaders().contentType());
  }

  // タスク：counts[]を更新する
  counts["Exit State"][exitState]++;
  counts["Http Response"][httpResponse]++;
  counts["Content-Type"][contentType]++;
}

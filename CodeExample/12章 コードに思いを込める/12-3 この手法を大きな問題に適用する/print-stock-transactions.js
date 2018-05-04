// 『一致しない行をスキップする』処理が長い
function printStockTransactions() {
  const stockIter = dbRead("stock");
  const priceIter = dbRead("price");
  const numSharesIter = dbRead("num-shares");

  // 3つのテーブルの行を一度にイテレートする
  while (stockIter++ && priceIter++ && numSharesIter++) {
    const stockTime = stockIter.time;
    const priceTime = priceIter.time;
    const numSharesTime = numSharesIter.time;

    if (stockTime !== priceTime || stockTime !== numSharesTime) {
      if (stockTime <= priceTime && stockTime <= numSharesTime) {
        stockIter.nextRow();
      } else if (priceTime <= stockTime && priceTime <= numSharesTime) {
        priceIter.nextRow();
      } else if (numSharesTime <= stockTime && numSharesTime <= priceTime) {
        numSharesIter.nextRow();
      } else {
        throw new error();
      }
      continue;
    }

    // 一致した行を印字する
    print(stockTime);
    print(stockIter.tickerSymbol);
    print(priceIter.price);
    print(numSharesIter.numberOfShares);

    stockIter.nextRow();
    priceIter.nextRow();
    numSharesIter.nextRow();
  }
}

/*******************
 改善例
********************/
// 『一致しない行をスキップする』処理を関数に切り出し、
// ロジックを一般化する
function printStockTransactions() {
  const stockIter = dbRead("stock");
  const priceIter = dbRead("price");
  const numSharesIter = dbRead("num-shares");

  while (true) {
    const time = advanceToMatchingTime(stockIter, priceIter, numSharesIter);
    if (time === null) {
      return;
    }

    // 一致した行を印字する
    print(time);
    print(stockIter.tickerSymbol);
    print(priceIter.price);
    print(numSharesIter.numberOfShares);

    stockIter.nextRow();
    priceIter.nextRow();
    numSharesIter.nextRow();
  }
}

function advanceToMatchingTime(rowIter1, rowIter2, rowIter3) {
  // 3つのテーブルの行を一度にイテレートする
  while (rowIter1 && rowIter2 && rowIter3) {
    const t1 = rowIter1.time;
    const t2 = rowIter2.time;
    const t3 = rowIter3.time;

    if (t1 == t2 && t1 == t3) {
      return t1;
    }

    tmax = max(t1, t2, t3);

    // いずれかの行が遅れているのであれば、その行を進める。
    // 最終的にすべての行が一致するまでwhileループを繰り返す
    if (t1 < tmax) {
      rowIter1.nextRow();
    }
    if (t2 < tmax) {
      rowIter2.nextRow();
    }
    if (t3 < tmax) {
      rowIter3.nextRow();
    }

    return null;
  }
}
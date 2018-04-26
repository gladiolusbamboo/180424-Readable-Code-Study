// 処理の内容がわかりづらい
allCustomers.forEach(function(customerID,index){
  allSales[customerID].forEach(function(sales, index){
    if(sales.recipient == customerID){
      //処理
    }
  });
});

/*******************
 改善例
********************/
// ブロックを要約するコメントをつける

// 顧客が自分で購入した商品を検索する
allCustomers.forEach(function(customerID,index){
  allSales[customerID].forEach(function(sales, index){
    if(sales.recipient == customerID){
      //処理
    }
  });
});

function minimizeLoss(prices) {
  let minLoss = Infinity;
  let buyYear = -1;
  let sellYear = -1;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const loss = prices[i] - prices[j];

      if (loss > 0 && loss < minLoss) {
        minLoss = loss;
        buyYear = i + 1;
        sellYear = j + 1;
      }
    }
  }

  if (minLoss === Infinity) {
    console.log("No valid loss possible.");
  } else {
    console.log(`Buy in year ${buyYear}, sell in year ${sellYear}, loss = ${minLoss}`);
  }
}

//  Example :
minimizeLoss([20, 15, 7, 2, 13]);

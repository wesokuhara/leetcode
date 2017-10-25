const maxProfit = prices => {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let curPrice = prices[i];
    let potentialProfit = curPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, curPrice);
  }

  return maxProfit;
};

module.exports = {
  maxProfit
};

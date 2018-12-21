// Takes in array of prices as parameter
// returns the max possible profit of the day
// If no profit is possible return -1
// A max profit of 0 is treated as any other max profit value
// O(n)

function maxStockProfit(pricessArr) {
	var maxProfit = -1;
	var buyPrice = 0;
	var sellPrice = 0;
	var changeBuyPrice = true;
	for (var i = 0; i < pricessArr.length; i++) {
		if (changeBuyPrice) buyPrice = pricessArr[i];
		sellPrice = pricessArr[i + 1];
		if (sellPrice < buyPrice) changeBuyPrice = true;
		else {
			var tempProfit = sellPrice - buyPrice;
			if (tempProfit > maxProfit) {
				maxProfit = tempProfit;
			}
			changeBuyPrice = false;
		}
    }
    return maxProfit;
}

var a = maxStockProfit([10,18,4,5,9,6,16,12]);
console.log(a);

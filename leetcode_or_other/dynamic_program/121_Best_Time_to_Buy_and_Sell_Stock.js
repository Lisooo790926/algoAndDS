// buttom up
// solution 1 find maximum of subarray
var maxProfit2 = function(prices) {
   
   let curSum = 0;
   let soFarMax = 0;
   let lastPrice = prices[0];
   for (price of prices) {
      // current sum of difference, compare continuous diff array is larger than zero ! 
      // if smaller than zero, then start from zero again ! 
      curSum = Math.max(0, curSum + (price - lastPrice));

      // compare these current Sum with max so far
      soFarMax = Math.max(soFarMax, curSum);
      lastPrice = price;
   }
   
   return soFarMax;     
 }

 // separate to small array, and one by one put into array
 // think like this way 
 // correct

 // solution 2 find lowest
 var maxProfit = function(prices) {
   
   let maxProfit = 0;
   let lowest = prices[0];
   for (price of prices) {
      // only compare the number before!!, so no issue in finding minmum!!!
      // find the current lowest one
      lowest = Math.min(price, lowest);
      // maxProfit = current number - lowest compare with current Profit
      maxProfit = Math.max(price - lowest, maxProfit);
   }
   return maxProfit;
 }


 let prices = [2,4,0,5]
 console.log(maxProfit2(prices))
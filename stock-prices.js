'use strict'

let arr = [12,45,67,93,24,75,10,80,40,32];
let profits = 0 ;

function maxProfit(trend) {
  let i;
  let j;
  for (i = 0; i < trend.length; i ++) {
    let currStock = trend[i]
    for (j = i; j < trend.length;j ++) {
      if ((trend[j] - currStock) > profits) {
        profits = trend[j] - currStock
      }
    }
  }
  if (profits === 0) {
    profits = -1
  }
  console.log(profits)
  return profits
}


maxProfit(arr)

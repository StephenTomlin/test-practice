'use strict'
function bizarreSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(function(){console.log(arr[i]);},arr[i]);
  }
}



bizarreSort([77, 1, 60, 33, 76, 600, 0, 5])
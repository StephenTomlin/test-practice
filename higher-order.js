'use strict'
function map(arr, cb) {
  let result = []
  let i;
  for (i = 0; i< arr.length;i++) {
    let currentLen = cb(arr[i]);
    result.push(currentLen)
  }
  console.log(result)
  return result
}

map(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });
'use strict'

for (let i = 1; i < 4; i++) {
  setTimeout(function() { console.log(i); }, i*1000);
}
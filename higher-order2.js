function multiply(x){
  return function(y){
    return x * y;
  };
}

console.log((multiply(4))(6))


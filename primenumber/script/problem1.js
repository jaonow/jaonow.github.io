var input = prompt("Enter a positive integer"); 
while (!isNormalInteger(input)){
  var input = prompt("Enter a positive integer"); 
}
showPrimes(input);
var result ;
function showPrimes(n){
  result = "For n = " + n + " prime numbers are ";
  for (let i = 2; i <= n; i++){
    if (!isPrime(i)) continue;
    result += i + "," ;
  }
  result = result.slice(0, -1);
  alert(result);
}
function isPrime(n) {
  for(let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function isNormalInteger(str) {
  var n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n >= 0;
}
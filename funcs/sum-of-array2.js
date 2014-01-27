function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    //return typeof n === 'number' && isFinite(n);  //yui isNumber
}

function sumArrayAnything(i) {
  var sum = 0;
  for (var  j = 0; j < i.length; j++) {
     if(isNumber(i[j])){
         sum += parseInt(i[j], 10);
     } else if (Object.prototype.toString.call(i[j]) === '[object Array]') {
         sum += sumArrayAnything(i[j]);
     }
  }
  return sum;
}

console.log(sumArrayAnything([[1,2,3],4,5]));
console.log(sumArrayAnything([1,2,3,4,5]));
console.log(sumArrayAnything(["kjakjsds","1",1,2,3,[4,5]]));
console.log(sumArrayAnything([[1,[2],3],4,5]));


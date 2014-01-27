function alwaysNewArray(){
  var myArr = [];
  myArr[0] = Math.floor((Math.random()*9));
  myArr[1] = Math.floor((Math.random()*9));    
  return myArr;  
}

var test1 = alwaysNewArray();
var test2 = alwaysNewArray();

console.log(test1);
console.log(test2);




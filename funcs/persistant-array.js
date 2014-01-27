var persistanArray = function(){
  var myArr = [];
  myArr[0] = Math.floor(Math.random()*9);
  myArr[1] = Math.floor(Math.random()*9);
  myArr[2] = Math.floor(Math.random()*9);
     
  return {
    getMyArray: function(){
          return myArr;      
    }
  };  
}();


console.log(persistanArray.getMyArray());
console.log(persistanArray.getMyArray());
console.log(persistanArray.getMyArray());






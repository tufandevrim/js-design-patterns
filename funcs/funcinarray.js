var i;
for(i=0; i<5; i++) {
  setTimeout(function(){console.log(i)}, 10);
}
console.log('----------');


function callme(z){
  console.log(z);    
}
for(i=0; i<5; i++) {
  setTimeout(
     (
         function(j) {
           return function(){callme(j)};
         }
     )(i), 
  5000);
}
//console.log('----------');




//for(i=0; i<5; i++) {
//  callme(i);
//}



function testme(a,b,c){
    console.log(arguments);    
    
    
    console.log(arguments[0]===a);    

    //test slice
    var myarr = [1,2,3,4];
    var myarr2 = myarr.slice();
    console.log(myarr2);
    console.log( myarr == myarr2); //verified those are NOT the same. not actual ref!!
    
    var arg = Array.prototype.slice.call(arguments);
    console.log(arg);
    
}

testme('1a','2b','3c','4d');


Function.prototype.bind = function(){
    var fn = this,
        arg = Array.prototype.slice.call(arguments);
    
    return function(){
        return fn.apply(this, arg.concat(Array.prototype.slice.call(arguments)));
    }    
}

function sum(a,b,c){
    console.log(a+b+c);    
}

var sumx = sum.bind(1,2);
sumx(3);


//console.log(sum.bind(3,3)(3));








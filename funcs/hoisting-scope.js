/*
 the line var y = 0, z = null; will see its declarations hoisted, but not the assignments, which is critical to understanding what will be output. Likewise, the declaration of function z () {} will be hoisted, rendering it pointless in the final output thanks to the delayed assignment of null.
*/

var x = 2,
    y = 3;

function func(x) {
    console.log(x);
    x += 1;
    console.log(x);
    console.log(y); // prints undefined since below defination hoisted
    var y = 0, z = null;
    console.log(y); // prints 0 since defination just happened
    function z () { console.log('hello'); }
    console.log(z); // prints null since function m hoisted

}

func(10); 

console.log(x);
console.log(y);



console.log(func.toString());



var i;
/*
for (i=0; i<5; i+=1){
    setTimeout(
        function(){
            console.log(i);    
        },
        100);    
}
*/


var myTemFunc = function(x) {
    return function() {
        console.log(x);
    }    
};

for (i=0; i<5; i+=1){
    setTimeout(myTemFunc(i), 100);
}



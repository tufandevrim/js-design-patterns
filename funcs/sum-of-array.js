function summyOfArrayAnything(a){
    var sum = 0,
        i = 0;


    function addToSum(arr) {
        var z = 0;
        for (z = 0; z < arr.length; z += 1){
           if (Array.isArray(arr[z])){
               addToSum(arr[z]);
           }else if (typeof arr[z] === "number"){
               sum+=arr[z];
           }
        }    

        
    }

    if (!Array.isArray(a)){
        return "a is not an array";    
    }
    
    
    for(i = 0; i < a.length; i+=1){
        if (Array.isArray(a[i])){
          addToSum(a[i]);
        } else if (typeof a[i] === "number"){
            sum+=a[i];
        }    
        
        
    }   
    

    return sum;
    
}



console.log(summyOfArrayAnything([[1,2,3],4,5]));
console.log(summyOfArrayAnything([1,2,3,4,5]));
console.log(summyOfArrayAnything(["kjakjsds",1,2,3,[4,5]]));
console.log(summyOfArrayAnything([[1,[2],3],4,5]));





function reverseString(input){
    var resultArr = [],
        tmpStrArr = input.splice(2),
        str = tmpStrArr.join(' '),
        tmpArr = str.split(''),
        i = tmpArr.length-1,
        j = 0;

    for (j=0; j < tmpArr.length; j += 1){
        resultArr[i-j] = tmpArr[j];
    } 
    
    return resultArr.join('');
}

console.log(reverseString(process.argv));




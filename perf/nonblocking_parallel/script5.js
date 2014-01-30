console.log("script5");
console.log(window.DEVS1.devrim);
setTimeout(function(){console.log(window.DEVS2.devrim);},1000); //if you put this below the following statement, it will not get executed due to race in condition issue
console.log(window.DEVS2.devrim);


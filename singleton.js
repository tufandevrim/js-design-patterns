function SingletonObject(){
    //do we have the instance of SingletonObject
    if (typeof SingletonObject.instance === "object") {
        return SingletonObject.instance;    
        
    }

    this.myprop = 0;
    
    //cache this. The problem is SingletonObject.instance can be overriden
    SingletonObject.instance = this;

    //use return the this
    return this;

}
var mySingletonObj1 = new SingletonObject();
var mySingletonObj2 = new SingletonObject();

console.log(mySingletonObj1 === mySingletonObj2); //true


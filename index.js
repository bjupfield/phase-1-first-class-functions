
function receivesAFunction(callback){
    callback();
    return 0;
}
function returnsANamedFunction(){
    return function namedFunction(){};
}
function returnsAnAnonymousFunction(){
    return function () {};
}
function callback(){
    console.log("callback")
}
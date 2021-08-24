// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// function sayHello(input){
//     if (input === 'Alex'){
//         return 'Hello Alex';
//     } else if (input === 'Pat') {
//         return 'Hello Pat'
//     } else {
//         return 'Hello Jane'
//     }
// }
//Refactored sayHello
function sayHello(input){
    if(input === true) {
        return 'Hello World'
    } else {
        return 'Hello ' + input;
    }
}
function isFive(x){
return x === 5
}
function isEven(x){
  if(x % 2 === 0) {
      return true
  }
}
function isVowel(){
return ['a','e', 'i', 'o', 'u']
}
function add(x){
return x + 1
}
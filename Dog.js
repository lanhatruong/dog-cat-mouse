var chalk = require('chalk')

function Dog(name){
    this.name = name;
    this.stomach = [];
}
Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
};
Dog.prototype.sayHi = function(){
    console.log('Hi, IM Dog. My Name is ' + chalk.red(this.name));
}
module.exports = Dog;
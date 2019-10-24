var Mouse = require('./Mouse');
var Cat = require('./Cat')
var Dog = require('./Dog')


var cat = new Cat();
var mouse = new Mouse();
var dog = new Dog();
try {
    cat.eat(dog);
} catch (error) {
    console.log('Error while cat eating');
}
console.log(cat);

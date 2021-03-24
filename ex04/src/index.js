class Pets {
    constructor(name, legs) {
        this._name = name;
        this._legs = legs;
    }    
        walk() {
            var numberOfLegs = this._legs;
            return this._name + ' is walking on ' + numberOfLegs + " legs";
    };
}
class Dog extends Pets {
    constructor(name, legs) {
        super(name, legs);
        this._legs = legs;
    }
        bark() {
            var dogSay =this._name;
            return dogSay + ` says WUF-WUF`;
    }
}
let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}
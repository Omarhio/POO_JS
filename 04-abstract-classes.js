class Animal {
    faireDuBruit() {
        return "L'animal fait du bruit";
    }
}

class Chien extends Animal {
    faireDuBruit() {
        return "Le chien aboie";
    }
}

class Chat extends Animal {
    faireDuBruit() {
        return "Le chat miaule";
    }
}

console.log(new Chien().faireDuBruit());
console.log(new Chat().faireDuBruit());
console.log(new Animal().faireDuBruit());
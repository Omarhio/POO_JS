## Exercice 4 : Polymorphisme

### Objectif : Comprendre et appliquer le polymorphisme.

1. Créer une classe Animal avec une méthode faireDuBruit.

2. Créer les classes Chien et Chat héritant de Animal et redéfinissant faireDuBruit.

3. Utiliser le polymorphisme pour appeler la méthode faireDuBruit sur des instances de Chien et Chat, affichant respectivement "Le chien aboie" et "Le chat miaule".

### Solution

```js
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
```
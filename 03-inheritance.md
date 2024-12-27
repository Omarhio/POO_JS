## Exercice 3 : Héritage

### Objectif : Apprendre à créer des relations hiérarchiques entre les classes.

1. Créer une classe Vehicule avec les attributs marque, modele et annee.

2. Faire en sorte que Voiture hérite de Vehicule et possède l'attribut couleur (absent de la classe Vehicule).

### Solution

```js
class Voiture {

    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }

}
class Vehicule extends Voiture {
    constructor(marque, modele, annee, couleur) {
        super(marque, modele, annee)
        this.couleur = couleur;

    }
}

const voiture = new Vehicule("Toyota", "Corolla", 2024, "Vert");

console.log(voiture.couleur);
```
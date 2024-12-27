## Exercice 2 : Encapsulation

### Objectif : Appliquer l'encapsulation pour protéger les données de la classe.

1. Modifier la classe Voiture pour rendre ses attributs privés.

2. Ajouter des getters et des setters pour chaque attribut.

3. Créer une instance de Voiture et modifier la couleur via les setters.

### Solution

```js
class Voiture {

    constructor(marque, modele, annee, couleur) {
        this._marque = marque;
        this._modele = modele;
        this._annee = annee;
        this._couleur = couleur;
    }

    get couleurs() {
        return this._couleur;
    }
    set couleurs(nouvelleCouleur) {
        this._couleur = nouvelleCouleur;
    }
}

const voiture = new Voiture("Toyota", "Corolla", 2024, "Vert");

console.log(voiture.couleurs);
```
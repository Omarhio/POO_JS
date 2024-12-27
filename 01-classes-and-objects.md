## Exercice 1 : Classes et Objets

### Objectif : Comprendre la création de classes et d'objets.

1. Créer une classe Voiture avec les attributs marque, modele, annee et couleur.

2. Ajouter une méthode afficherDetails pour afficher les caractéristiques de la voiture.

3. Créer une instance de Voiture, initialiser ses attributs et afficher ses détails.

### Solution

```js
class Voiture {
    constructor(marque, modele, annee, couleur) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }
    afficherDetails() {
        console.log(this.marque)
        console.log(this.modele)
        console.log(this.annee)
        console.log(this.couleur)
    }
}
const voiture = new Voiture("Toyota", "Yaris", "2024", "Blanche");
voiture.afficherDetails(voiture);```
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
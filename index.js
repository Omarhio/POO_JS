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

voiture.afficherDetails(voiture);
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
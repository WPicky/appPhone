import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//En commentaire : ce qu'a fait le prof


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  titre: String;
  app: App;

  constructor(public navCtrl: NavController) {
    this.titre = "Titre";
    this.app = new App(this.titre, 0.1);
  }

  Declencheur(){
    console.log("c'est ok");
  }
}

class App {
  nom: String;
  version: Number;

  constructor(nom: String, version: Number){
    this.nom = nom;
    this.version = version;
  }
}

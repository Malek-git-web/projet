import { Avis } from "./avis";

export class Produit {
    constructor(public id:number,public nom:string,public categorie:string,public prix:number,public description:string,public detail:string,public promotion:number,public dateDelancement:Date,public enStock:boolean,public couleur:string,public quantite:number,public marque:string,public avis:Avis[] ){}
}
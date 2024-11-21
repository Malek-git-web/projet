import { Component, inject, OnInit } from '@angular/core';
import { CommandesService } from '../../services/commandes.service';
import { Commande } from '../../model/commande';
import { ProduitsService } from '../../services/produits.service';
import { Produit } from '../../model/produit';

@Component({
  selector: 'app-liste-commande',
  standalone: true,
  imports: [],
  templateUrl: './liste-commande.component.html',
  styleUrl: './liste-commande.component.css'
})
export class ListeCommandeComponent implements OnInit {
commandesService:CommandesService=inject(CommandesService);
produitService:ProduitsService=inject(ProduitsService);
sacs:Produit[]=[];
listeCommandes:Commande[]=[]
ngOnInit(): void {
  this.commandesService.getCommandes().subscribe(
    data=>this.listeCommandes=data
  );
  this.produitService.getProducts().subscribe(
    data=>this.listeSacs=data
  )
}
listeSacs:Produit[]=[];
onSupprimer(id:number){
  this.commandesService.deleteCommandes(id).subscribe();
}
// getSac(id:number){
  
//     this.produitService.getProductsById(id).subscribe(
//       data=>this.sac=data
//       )

// }
}

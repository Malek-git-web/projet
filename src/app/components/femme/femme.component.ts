import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProduitsService } from '../../produits.service';
import { Produit } from '../../produit';

@Component({
  selector: 'app-femme',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './femme.component.html',
  styleUrl: './femme.component.css'
})
export class FemmeComponent implements OnInit  {
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsFemme: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsFemme=data.filter((elt)=> elt.categorie=="Femme")
    )
  }
  

}

import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Produit } from '../../produit';
import { ProduitsService } from '../../produits.service';

@Component({
  selector: 'app-homme',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './homme.component.html',
  styleUrl: './homme.component.css'
})

export class HommeComponent implements OnInit  {
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsHomme: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsHomme=data.filter((elt)=> elt.categorie=="Homme")
    )
  }
  

}
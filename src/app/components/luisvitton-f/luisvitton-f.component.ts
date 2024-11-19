import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../produit';
import { ProduitsService } from '../../produits.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-luisvitton-f',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './luisvitton-f.component.html',
  styleUrl: './luisvitton-f.component.css'
})

export class LuisvittonFComponent implements OnInit  {
  router:Router=inject(Router);
  onfemme(){
    this.router.navigate(['/femme']);
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsLv: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsLv=data.filter((elt)=> elt.marque=="Louis Vuitton" && elt.categorie=="Femme")
    )
  }
  

}
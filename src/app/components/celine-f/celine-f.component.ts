import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../produit';
import { ProduitsService } from '../../produits.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-celine-f',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './celine-f.component.html',
  styleUrl: './celine-f.component.css'
})

export class CelineFComponent implements OnInit  {
  router:Router=inject(Router);
  onFemme(){
    this.router.navigate(['/femme']);
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsCeline: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsCeline=data.filter((elt)=> elt.marque=="Céline" && elt.categorie=="Femme")
    )
  }
  

}
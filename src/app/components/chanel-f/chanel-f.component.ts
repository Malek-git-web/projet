import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../produit';
import { ProduitsService } from '../../produits.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-chanel-f',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './chanel-f.component.html',
  styleUrl: './chanel-f.component.css'
})

export class ChanelFComponent implements OnInit  {
  router:Router=inject(Router);
  onFemme(){
    this.router.navigate(['/femme']);
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsChanel: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsChanel=data.filter((elt)=> elt.marque=="Chanel" && elt.categorie=="Femme")
    )
  }
  

}
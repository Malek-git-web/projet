import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../produit';
import { ProduitsService } from '../../produits.service';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-chanel-h',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './chanel-h.component.html',
  styleUrl: './chanel-h.component.css'
})

export class ChanelHComponent implements OnInit  {
  router:Router=inject(Router);
  onHomme(){
    this.router.navigate(['/homme']);
  }
  produitSrvice:ProduitsService=inject(ProduitsService);
  sacsChanel: Produit[]=[];
  ngOnInit(): void {
    this.produitSrvice.getProducts().subscribe(
      data=> this.sacsChanel=data.filter((elt)=> elt.marque=="Chanel" && elt.categorie==="Homme")
    )
  }
  

}
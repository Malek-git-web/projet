import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../model/produit';
import { ProduitsService } from '../../services/produits.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent  implements OnInit {
  listeproduits:Produit[]=[];
private readonly produitService:ProduitsService=inject(ProduitsService);
ngOnInit(): void {
  this.produitService.getProducts().subscribe(
    data=>this.listeproduits=data
  )
}}
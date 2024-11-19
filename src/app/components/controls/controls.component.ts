import { Component, inject, OnInit } from '@angular/core';
import { ProduitsService } from '../../produits.service';
import { Produit } from '../../produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent implements OnInit {
  router:Router=inject(Router);
  mdp!:string;
  listeproduits:Produit[]=[];
private readonly produitService:ProduitsService=inject(ProduitsService);
ngOnInit(): void {
  this.mdp=this.produitService.getMotDePasse();
  this.produitService.getProducts().subscribe(
    data=>this.listeproduits=data
  )
}


onModifier(id:number,p:Produit){
  this.produitService.patchProduct(id,p).subscribe(
    data=>console.log(data)
  );
}

//partie mot de passe

 

changeMdp(nvMdp:any){
 this.produitService.updateMdp(nvMdp.value);
 alert('le mot de passe est bien changer !!!')

}
//CRUD routes
onAddSac(){
  this.router.navigate(['/ajouter-sac']);
}
onModifSac(){
  this.router.navigate(['/modifier-sac']);
}
onSuppSac(){
  this.router.navigate(['/supprimer-sac']);
}
onConsultSac(){
  this.router.navigate(['/consulter-sac']);
}
}

import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Produit } from '../../produit';
import { ProduitsService } from '../../produits.service';
import { Router } from '@angular/router';
import { Avis } from '../../avis';
@Component({
  selector: 'app-ajouter-sac',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajouter-sac.component.html',
  styleUrl: './ajouter-sac.component.css'
})
export class AjouterSacComponent implements OnInit {
productForm!:FormGroup;
readonly formBuilder:FormBuilder=inject(FormBuilder);
  router:Router=inject(Router);
  readonly produitService:ProduitsService=inject(ProduitsService);
ngOnInit(): void {
  
  this.productForm=this.formBuilder.group(
    {
      id:[0],
      nom: [''],
      photo: [''],
      categorie: [''],
      prix: [0],
      description: [''],
      detail: [''],
      promotion: [0],
      dateDelancement: [''],
      enStock: [false],
      couleur: [''],
      quantite: [1],
      marque: [''],
      Avis:[[]]
    }
  )

}
 getRandomInt(min: number, max: number): number {
  // Utilisation de Math.random() pour générer un nombre aleatoire dans la plage min-max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
sac!:Produit;
onSubmit(){
this.productForm.get('id')?.setValue( this.getRandomInt(45,100000));
this.sac=this.productForm.value;
this.onAjouter(this.sac);

}
onEffacer(){
  this.productForm.reset({
    prix: [0],
    promotion: [0],
    quantite: [1]
  });
}
onAjouter(p:Produit){
  this.produitService.addProduct(p).subscribe(
    data=>console.log(data)
  );
}
onRetour(){
this.router.navigate(['/controls']);
}
}

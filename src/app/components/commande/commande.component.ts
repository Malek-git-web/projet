import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommandesService } from '../../services/commandes.service';
import { Commande } from '../../model/commande';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commande',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent implements OnInit {
  activatedRoute:ActivatedRoute=inject(ActivatedRoute);
productForm!:FormGroup;
fb:FormBuilder=inject(FormBuilder);
commandes:Commande[]=[];
commandeService:CommandesService=inject(CommandesService);
idS!:number;
ngOnInit(): void {
  this.idS=this.activatedRoute.snapshot.params['id'];
  this.productForm=this.fb.group({
    id:[0],
    nom:['',Validators.required],
    tel:[0,[Validators.required,Validators.pattern('^[1-9][0-9]{7}$')]],
    adresse:['',Validators.required],
    quantite:[1,Validators.required],
    idSac:[0]
  })
}
get tel(){
  return this.productForm.get('tel');
}
test(n:number){
  for(let elt of this.commandes){
    if(elt.id===n){
      return false
    }
      
  }return true;
}
 getRandomInt(min: number, max: number): number {
  // Utilisation de Math.random() pour générer un nombre aleatoire dans la plage min-max
  let nvId= Math.floor(Math.random() * (max - min + 1)) + min;
  while(!this.test(nvId)){
    nvId=Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return nvId;
  
}
commander(){
this.productForm.get('id')?.setValue( this.getRandomInt(45,100000));
this.productForm.get('idSac')?.setValue( this.idS);
this.onAjouter(this.productForm.value);
}
onAjouter(c:Commande){
  this.commandeService.addCommandes(c).subscribe();
}
}

import { Component, inject, OnInit } from '@angular/core';
import { ProduitsService } from '../../services/produits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  login!:string;
  mdp!:string;
  router:Router=inject(Router);
  produitService:ProduitsService=inject(ProduitsService);
  ngOnInit(): void {
    this.login=this.produitService.getLogin();
    this.mdp=this.produitService.getMotDePasse();
  }
  onControls(){
    this.router.navigate(['/controls'])
  }

onSubmit(log:string,md:string){
  if(this.login==log && this.mdp==md){
     this.onControls();
  }else{
    alert("retaper vos données d'accés");
  }
}
}

import { Component, Input } from '@angular/core';
import { Produit } from '../../produit';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css'
})
export class FilsComponent {
@Input() elt!:Produit;
}

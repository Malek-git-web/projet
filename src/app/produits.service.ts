import { Injectable } from '@angular/core';
import { Produit } from './produit';
import { Avis } from './avis';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
 lestproduits: Produit[] = [
    // Hermès - Femmes
    new Produit(1, 'Birkin 30', 'Femme', 8500, 'Sac à main en cuir de veau.', 'Dimensions : 30 x 22 x 16 cm. Fabriqué en France.', 0, new Date('2024-01-10'), true, 'Marron', 5, 'Hermès', [
        new Avis('Un sac exceptionnel, qualité irréprochable!', 'Alice', new Date('2024-02-01'), 5),
        new Avis('Un peu cher mais tellement beau!', 'Marie', new Date('2024-03-05'), 4)
    ]),
    new Produit(2, 'Kelly 25', 'Femme', 7500, 'Sac en cuir emblématique.', 'Dimensions : 25 x 18 x 10 cm. Fabriqué en France.', 0, new Date('2024-02-15'), true, 'Noir', 3, 'Hermès', [
        new Avis('Un classique indémodable.', 'Sophie', new Date('2024-01-25'), 5)
    ]),
    new Produit(3, 'Constance', 'Femme', 6500, 'Sac bandoulière en cuir.', 'Dimensions : 23 x 17 x 7 cm. Fabriqué en France.', 0, new Date('2024-03-20'), true, 'Rouge', 4, 'Hermès', []),
    new Produit(4, 'Evelyne', 'Femme', 4000, 'Sac en cuir perforé, chic et pratique.', 'Dimensions : 29 x 28 x 10 cm. Fabriqué en France.', 0, new Date('2024-01-25'), true, 'Marron', 6, 'Hermès', [
        new Avis('Super sac pour tous les jours!', 'Emma', new Date('2024-02-10'), 5)
    ]),
    new Produit(5, 'Garden Party', 'Femme', 3500, 'Sac en toile et cuir.', 'Dimensions : 36 x 25 x 15 cm. Fabriqué en France.', 0, new Date('2024-02-05'), true, 'Beige', 2, 'Hermès', []),

    // Hermès - Hommes
    new Produit(6, 'Haciena', 'Homme', 2000, 'Sac en cuir de vachette, élégant et pratique.', 'Dimensions : 35 x 25 x 10 cm. Fabriqué en France.', 0, new Date('2024-01-10'), true, 'Noir', 5, 'Hermès', []),
    new Produit(7, 'Sac à dos Urban', 'Homme', 2500, 'Sac à dos en toile et cuir, résistant.', 'Dimensions : 42 x 30 x 15 cm. Fabriqué en France.', 0, new Date('2024-02-20'), true, 'Marron', 4, 'Hermès', [
        new Avis('Un sac à dos parfait pour tous les jours.', 'Julien', new Date('2024-03-01'), 5)
    ]),
    new Produit(8, 'Messenger Bag', 'Homme', 1800, 'Sac messager en cuir, style moderne.', 'Dimensions : 30 x 24 x 10 cm. Fabriqué en France.', 0, new Date('2024-03-15'), true, 'Gris', 3, 'Hermès', []),

    // Chanel - Femmes
    new Produit(9, 'Classic Flap', 'Femme', 6000, 'Sac à bandoulière en cuir matelassé.', 'Dimensions : 25 x 15 x 10 cm. Fabriqué en France.', 0, new Date('2024-01-15'), true, 'Noir', 4, 'Chanel', [
        new Avis('La qualité Chanel est inégalée.', 'Elisa', new Date('2024-01-30'), 5),
        new Avis('Très satisfaite de mon achat!', 'Lucie', new Date('2024-02-10'), 4)
    ]),
    new Produit(10, 'Boy Bag', 'Femme', 7000, 'Sac en cuir avec chaîne.', 'Dimensions : 25 x 15 x 10 cm. Fabriqué en France.', 0, new Date('2024-03-01'), true, 'Gris', 3, 'Chanel', [
        new Avis('Stylé et pratique!', 'Nina', new Date('2024-03-20'), 5)
    ]),
    new Produit(11, 'Gabrielle', 'Femme', 5500, 'Sac en cuir souple avec une bandoulière.', 'Dimensions : 30 x 20 x 10 cm. Fabriqué en France.', 0, new Date('2024-02-10'), true, 'Beige', 5, 'Chanel', []),
    new Produit(12, '2.55', 'Femme', 5000, 'Sac en cuir avec une chaîne classique.', 'Dimensions : 25 x 15 x 10 cm. Fabriqué en France.', 0, new Date('2024-03-15'), true, 'Noir', 2, 'Chanel', [
        new Avis('Indispensable dans ma garde-robe!', 'Claire', new Date('2024-01-12'), 5)
    ]),
    new Produit(13, 'Chanel 19', 'Femme', 5800, 'Sac en cuir et tissu, style décontracté.', 'Dimensions : 30 x 25 x 10 cm. Fabriqué en France.', 0, new Date('2024-04-01'), true, 'Rouge', 4, 'Chanel', []),

    // Chanel - Hommes
    new Produit(14, 'Chanel Backpack', 'Homme', 3500, 'Sac à dos en cuir matelassé, élégant et pratique.', 'Dimensions : 40 x 30 x 15 cm. Fabriqué en France.', 0, new Date('2024-02-01'), true, 'Noir', 4, 'Chanel', [
        new Avis('Très stylé, j’adore!', 'Maxime', new Date('2024-02-25'), 5)
    ]),
    new Produit(15, 'Chanel Crossbody', 'Homme', 2500, 'Sac bandoulière en cuir, pour un look décontracté.', 'Dimensions : 25 x 20 x 7 cm. Fabriqué en France.', 0, new Date('2024-03-10'), true, 'Marron', 3, 'Chanel', []),
    new Produit(16, 'Chanel Duffle Bag', 'Homme', 4000, 'Sac de voyage en cuir, spacieux et élégant.', 'Dimensions : 50 x 30 x 25 cm. Fabriqué en France.', 0, new Date('2024-03-20'), true, 'Noir', 5, 'Chanel', []),

    // Louis Vuitton - Femmes
    new Produit(17, 'Speedy 30', 'Femme', 1200, 'Sac à main en toile monogram.', 'Dimensions : 30 x 21 x 11 cm. Fabriqué en France.', 0, new Date('2024-01-05'), true, 'Marron', 10, 'Louis Vuitton', [
        new Avis('Pratique et spacieux!', 'Pauline', new Date('2024-02-02'), 5),
        new Avis('Parfait pour tous les jours.', 'Claire', new Date('2024-03-15'), 4)
    ]),
    new Produit(18, 'Neverfull MM', 'Femme', 1400, 'Sac tote spacieux en toile monogram.', 'Dimensions : 32 x 29 x 14 cm. Fabriqué en France.', 0, new Date('2024-02-12'), true, 'Beige', 8, 'Louis Vuitton', [
        new Avis('Super sac, j’adore!', 'Juliette', new Date('2024-03-05'), 5)
    ]),
    new Produit(19, 'Pochette Métis', 'Femme', 1900, 'Sac bandoulière en cuir et toile.', 'Dimensions : 25 x 19 x 7 cm. Fabriqué en France.', 0, new Date('2024-02-20'), true, 'Noir', 6, 'Louis Vuitton', []),
    new Produit(20, 'OnTheGo', 'Femme', 2500, 'Sac tote spacieux en toile monogram.', 'Dimensions : 36 x 28 x 14 cm. Fabriqué en France.', 0, new Date('2023-11-30'), false, 'Marron', 0, 'Louis Vuitton', []),
    new Produit(21, 'NéoNoé', 'Femme', 1700, 'Sac seau en toile monogram.', 'Dimensions : 24 x 24 x 24 cm. Fabriqué en France.', 0, new Date('2024-01-10'), true, 'Gris', 7, 'Louis Vuitton', []),

    // Louis Vuitton - Hommes
    new Produit(22, 'Christopher PM', 'Homme', 2200, 'Sac à dos en toile monogram.', 'Dimensions : 40 x 30 x 15 cm. Fabriqué en France.', 0, new Date('2024-02-01'), true, 'Marron', 5, 'Louis Vuitton', []),
    new Produit(23, 'Keepall 55', 'Homme', 2500, 'Sac de voyage en toile monogram.', 'Dimensions : 55 x 27 x 24 cm. Fabriqué en France.', 0, new Date('2024-03-05'), true, 'Beige', 4, 'Louis Vuitton', []),
    new Produit(24, 'Messenger Bag', 'Homme', 1500, 'Sac bandoulière en toile monogram.', 'Dimensions : 30 x 20 x 5 cm. Fabriqué en France.', 0, new Date('2024-03-15'), true, 'Noir', 3, 'Louis Vuitton', []),

    // Polène - Femmes
    new Produit(25, 'Numéro Un', 'Femme', 400, 'Sac en cuir, intemporel et élégant.', 'Dimensions : 26 x 20 x 11 cm. Fabriqué en France.', 0, new Date('2024-01-15'), true, 'Noir', 8, 'Polène', []),
    new Produit(26, 'Numéro Deux', 'Femme', 450, 'Sac en cuir de qualité, pratique et chic.', 'Dimensions : 30 x 22 x 12 cm. Fabriqué en France.', 0, new Date('2024-01-20'), true, 'Marron', 7, 'Polène', []),
    new Produit(27, 'Numéro Trois', 'Femme', 500, 'Sac à main en cuir, élégant et fonctionnel.', 'Dimensions : 28 x 21 x 10 cm. Fabriqué en France.', 0, new Date('2024-02-05'), true, 'Gris', 6, 'Polène', []),

    // Polène - Hommes
    new Produit(28, 'Sac Bandoulière', 'Homme', 350, 'Sac bandoulière en cuir, style minimaliste.', 'Dimensions : 25 x 20 x 5 cm. Fabriqué en France.', 0, new Date('2024-02-10'), true, 'Noir', 5, 'Polène', []),
    new Produit(29, 'Sac à Dos', 'Homme', 400, 'Sac à dos en cuir, pratique pour la ville.', 'Dimensions : 40 x 30 x 15 cm. Fabriqué en France.', 0, new Date('2024-03-01'), true, 'Marron', 4, 'Polène', []),

    // Prada - Femmes
    new Produit(30, 'Nylon Backpack', 'Femme', 1300, 'Sac à dos en nylon, léger et fonctionnel.', 'Dimensions : 30 x 25 x 15 cm. Fabriqué en Italie.', 0, new Date('2024-02-01'), true, 'Noir', 9, 'Prada', []),
    new Produit(31, 'Galleria', 'Femme', 2500, 'Sac en cuir Saffiano, élégant et spacieux.', 'Dimensions : 35 x 24 x 15 cm. Fabriqué en Italie.', 0, new Date('2024-02-15'), true, 'Beige', 8, 'Prada', []),

    // Prada - Hommes
    new Produit(32, 'Prada Nylon Messenger', 'Homme', 1400, 'Sac bandoulière en nylon, léger.', 'Dimensions : 30 x 20 x 10 cm. Fabriqué en Italie.', 0, new Date('2024-01-20'), true, 'Noir', 6, 'Prada', []),
    new Produit(33, 'Prada Duffle Bag', 'Homme', 2200, 'Sac de voyage en cuir, spacieux.', 'Dimensions : 50 x 30 x 25 cm. Fabriqué en Italie.', 0, new Date('2024-02-10'), true, 'Gris', 5, 'Prada', []),

    // Céline - Femmes
    new Produit(34, 'Luggage Tote', 'Femme', 3200, 'Sac en cuir, silhouette unique.', 'Dimensions : 36 x 30 x 18 cm. Fabriqué en Italie.', 0, new Date('2024-03-01'), true, 'Noir', 7, 'Céline', []),
    new Produit(35, 'Classic Box', 'Femme', 2900, 'Sac en cuir avec un design minimaliste.', 'Dimensions : 26 x 17 x 7 cm. Fabriqué en Italie.', 0, new Date('2024-02-20'), true, 'Rouge', 5, 'Céline', []),

    // Céline - Hommes
    new Produit(36, 'Céline Briefcase', 'Homme', 1800, 'Sac en cuir pour ordinateur, élégant.', 'Dimensions : 40 x 30 x 8 cm. Fabriqué en Italie.', 0, new Date('2024-03-05'), true, 'Noir', 4, 'Céline', []),
    new Produit(37, 'Céline Messenger', 'Homme', 1600, 'Sac bandoulière en cuir, pratique.', 'Dimensions : 30 x 25 x 5 cm. Fabriqué en Italie.', 0, new Date('2024-02-28'), true, 'Marron', 3, 'Céline', [])
];

getProduits(){
  return this.lestproduits;
}

  constructor() { }
}

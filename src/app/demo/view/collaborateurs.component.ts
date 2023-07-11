import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import { Product } from '../domain/product';
import { ProductService } from '../service/productservice';
import {StaffService} from '../service/collaborateurservice';
import {Collaborateurs} from '../../models/main.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    templateUrl: './collaborateurs.component.html',
    styleUrls: ['./tabledemo.scss']
})
export class CollaborateursComponent implements OnInit {

    products: Product[];

    dropdownItem: SelectItem[];

    selectedDropdownItem: any;
    afficher = false;


    constructor(private staffService: StaffService , private location: Location, private router: Router) { }
    collaborateurs: Collaborateurs[];
    openModal(){
const modalDiv = document.getElementById('editModal');
if (modalDiv != null){
    modalDiv.style.display = 'block';
}
    }
    closeModal(){
        const modalDiv = document.getElementById('editModal');
        if (modalDiv != null){
            modalDiv.style.display = 'none';
        }
    }
    ngOnInit() {
        this.staffService.getCollaborateurs().subscribe(data => {
            this.collaborateurs = data;
        });
    }
    refresh(): void {
        this.router.navigateByUrl('/dashboards/collaborateurs' , { skipLocationChange: true }).then(() => {
            console.log(decodeURI(this.location.path()));
            this.router.navigate([decodeURI(this.location.path())]);
        });
    }
    DeleteColl(id: any) {
        this.staffService.deleteCollaborateur(id).subscribe(
            () => {
                console.log('Collaborateur supprimé avec succès');
                this.refresh(); // Recharge la page
            },
            error => {
                console.error('Une erreur s\'est produite lors de la suppression du collaborateur :', error);
                // Gérez l'erreur en conséquence
            }
        );
    }
   /* afficherFormulaire() {
        this.router.navigate(['/ajouterRole']); // Remplacez '/ajouter' par le chemin de votre route du formulaire
    }*/
}

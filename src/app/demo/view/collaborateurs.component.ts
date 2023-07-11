import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import { Product } from '../domain/product';
import { ProductService } from '../service/productservice';
import {StaffService} from '../service/collaborateurservice';
import {Collaborateurs} from '../../models/main.model';


@Component({
    templateUrl: './collaborateurs.component.html',
    styleUrls: ['./tabledemo.scss']
})
export class CollaborateursComponent implements OnInit {

    products: Product[];

    dropdownItem: SelectItem[];

    selectedDropdownItem: any;
    afficher = false;


    constructor(private staffService: StaffService ) { }
    collaborateurs: Collaborateurs[];
    ngOnInit() {
        this.staffService.getCollaborateurs().subscribe(data => {
            this.collaborateurs = data;
        });
    }
   /* afficherFormulaire() {
        this.router.navigate(['/ajouterRole']); // Remplacez '/ajouter' par le chemin de votre route du formulaire
    }*/
}

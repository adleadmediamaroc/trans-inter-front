import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Collaborateurs } from '../../api/main';
import { StaffService } from '../../service/StaffService';
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    public visible = false;
    editCollaborateurs?: Collaborateurs;

    selectedDropdownItem: any;
    afficher = false;


    constructor(private staffService: StaffService , private location: Location, private router: Router) { }
    collaborateurs?: Collaborateurs[];
    isModalOpen = false;
    modalOpen = false;

    ngOnInit() {
        this.staffService.getCollaborateurs().subscribe(data => {
            this.collaborateurs = data;
        });
    }
    /*refresh(): void {
        this.router.navigateByUrl('/dashboards/collaborateurs' , { skipLocationChange: true }).then(() => {
            console.log(decodeURI(this.location.path()));
            this.router.navigate([decodeURI(this.location.path())]);
        });
    }*/
    openModal() {
        this.modalOpen = true;
    }

    closeModal() {
        this.modalOpen = false;
    }


    DeleteColl(id: any) {
        this.staffService.deleteCollaborateur(id).subscribe(
            () => {
                console.log('Collaborateur supprimé avec succès');
                //this.refresh(); // Recharge la page
            },
            error => {
                console.error('Une erreur s\'est produite lors de la suppression du collaborateur :', error);
                // Gérez l'erreur en conséquence
            }
        );
    }
    public onOpenModal(collaborateurs: Collaborateurs, mode: string): void {
        let container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (mode === 'edit') {
            this.editCollaborateurs = collaborateurs;
            button.setAttribute('data-target', '#updateEmployeeModal');
        }
        //container.appendChild(button);
        button.click();


    }
   /* afficherFormulaire() {
        this.router.navigate(['/ajouterRole']); // Remplacez '/ajouter' par le chemin de votre route du formulaire
    }*/
}

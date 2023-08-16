import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "primeng/dynamicdialog";

@Component({
  selector: 'app-creer-demande',
  templateUrl: './creer-demande.component.html',
  styleUrls: ['./creer-demande.component.scss']
})

export class CreerDemandeComponent {
    selectedGeneralService: string = 'land';
    selectedServiceDirection: string = 'inbound';
    showForm: boolean = false;
    demandeForm: FormGroup;


    constructor(private formBuilder: FormBuilder) {
        this.demandeForm = this.formBuilder.group({
            // Définir les champs du formulaire ici
        });

    }

    creerDemande() {
        this.showForm = true;
    }

    submitDemande() {
        // Logique pour soumettre la demande
    }


}

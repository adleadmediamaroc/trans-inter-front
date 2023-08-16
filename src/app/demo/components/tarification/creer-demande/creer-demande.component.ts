import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DialogService} from "primeng/dynamicdialog";
import {CountryService} from "../../../service/country.service";

@Component({
  selector: 'app-creer-demande',
  templateUrl: './creer-demande.component.html',
  styleUrls: ['./creer-demande.component.scss']
})

export class CreerDemandeComponent {
    client=[];

    countries: any[] = [];

    dropdownItems = [
        { name: 'FCL ', code: 'FCL ' },
        { name: 'FCL(Buyer\'s Consolidation)', code: 'FCL(Buyer\'s Consolidation)' },
        { name: 'FCL(Empty Repositioning)', code: 'FCL(Empty Repositioning)' },
        { name: 'LCL', code: 'LCL' },
        { name: 'Break Bulk ', code: 'Break Bulk ' },
        { name: 'Dry Bulk ', code: 'Dry Bulk ' },
        { name: 'Liquid Bulk', code: 'Liquid Bulk' },
        { name: 'RORO', code: 'RORO' }
    ];
    adresseType = [
        { name: 'Aeroport ', code: 'Aeroport ' },
        { name: 'Port/Station de train', code: 'Port/Station de train' },
        { name: 'Adresse terrestre ', code: 'Adresse terrestre ' },

    ];
    envoi=[
        { name: 'Aeroport ', code: 'Aeroport ' },
        { name: 'Port/Station de train', code: 'Port/Station de train' },
        { name: 'Adresse terrestre ', code: 'Adresse terrestre ' }

    ]
    dropdowncondition= [
        { name: 'EXW ', code: 'EXW ' },
        { name: 'FCA', code: 'FCA' },
        { name: 'CPT', code: 'CPT' },
        { name: 'CIP', code: 'CIP' },
        { name: 'DAT', code: 'DAT' },
        { name: 'DAP', code: 'DAP' },
        { name: 'DDP ', code: 'DDP ' },
        { name: 'Door-to-door ', code: 'Door-to-door ' },
        { name: 'DPU ', code: 'DPU ' },
        { name: 'FAS ', code: 'FAS ' },
        { name: 'FOB ', code: 'FOB ' },
        { name: 'CFR ', code: 'CFR ' },
        { name: 'CIF ', code: 'CIF ' },

        ];


    selectedGeneralService: string = 'Terre';
    selectedServiceDirection: string = 'Sortant(e)';
    showForm: boolean = false;
    demandeForm: FormGroup;


    constructor(private formBuilder: FormBuilder,private countryService: CountryService) {
        this.demandeForm = this.formBuilder.group({
            selectedState: [''],
            selectedMulti:[''],
            valRadio:[''],
            val:[''],
            selectedCountry:['']
        });
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });

    }

    creerDemande() {
        this.showForm = true;
    }

    submitDemande() {
        // Logique pour soumettre la demande
    }


}

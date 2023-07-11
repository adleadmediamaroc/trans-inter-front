import { Component, OnInit } from '@angular/core';
import {Collaborateurs} from '../../../models/main.model';



@Component({
  selector: 'app-ajouter-collaborateur',
  templateUrl: './ajouter-collaborateur.component.html',
  styleUrls: ['./ajouter-collaborateur.component.css']
})
export class AjouterCollaborateurComponent implements OnInit {
 profile     = true;
 permission  = false;
 isSelected  = true;
 Selected  = false;
 collaborateurs: Collaborateurs[];
  constructor() { }

  ngOnInit(): void {
  }

    profileColl() {
      this.profile = true;
      this.permission = false ;
      this.isSelected = true;
      this.Selected = false;
    }
    permissionColl()  {
      this.permission = true;
      this.profile = false;
      this.Selected = true;
      this.isSelected = false;
    }

    onFileSelected(event: any) {
        const file: File = event.target.files[0];
    }
}

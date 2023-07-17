import { Component, OnInit } from '@angular/core';
import {Collaborateurs} from '../../../models/main.model';
import {StaffService} from '../../service/collaborateurservice';


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
 collaborateur: Collaborateurs = new Collaborateurs();
  constructor(private staffservice: StaffService) {}
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
    addCollaborateur() {
        this.staffservice.addCollaborateur(this.collaborateur).subscribe(
            () => {
                console.log('Collaborateur ajouté avec succès');
                // Effectuez les actions nécessaires après l'ajout du collaborateur
            },
            error => {
                console.error('Une erreur s\'est produite lors de l\'ajout du collaborateur :', error);
                // Gérez l'erreur en conséquence
            }
        );
    }

}

import { Component } from '@angular/core';
import {Collaborateurs, Role, RolePermission} from "../demo/api/main";
import {StaffService} from "../demo/service/StaffService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ajouter-collaborateur',
  templateUrl: './ajouter-collaborateur.component.html',
  styleUrls: ['./ajouter-collaborateur.component.scss']
})
export class AjouterCollaborateurComponent {


    profile     = true;
    permission  = false;
    isSelected  = true;
    Selected  = false;
    collaborateurs?: Collaborateurs[];
    collaborateur: Collaborateurs = new Collaborateurs();
    roles? :Role[];
    selectedRolePermissions?: Role;
    rolePermission :RolePermission[]=[]

    constructor(private staffservice: StaffService , private http:HttpClient) {}
    ngOnInit(): void {
        this.http.get<Role[]>('http://localhost:8080/api/roles/').subscribe(
            (roles) => {
                this.roles = roles;
            },
            (error) => {
                console.log(error);
            }
        );

    }

    onRoleChange() {
        console.log('Selected Role ID:', this.selectedRolePermissions);
        // Effectuez une requête HTTP pour récupérer les rolePermissions pour le rôle sélectionné
        this.http.get<Role>(`http://localhost:8080/api/roles/`+ this.selectedRolePermissions).subscribe(
            (role) => {
                this.selectedRolePermissions = role;
                this.rolePermission=role.rolepermission;

            },
            (error) => {
                console.log(error);
            }
        );
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


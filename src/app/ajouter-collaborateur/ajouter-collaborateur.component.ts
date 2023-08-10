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
    selectedRole ?: Role[];
    rolePermission :RolePermission[]=[];
    newrole?:Role;
    permissions?: Permissions[];
    constructor(private staffservice: StaffService , private http:HttpClient) {}
    ngOnInit(): void {
        this.http.get<Role[]>('http://localhost:8080/api/roles/').subscribe(
            (roles) => {
                this.selectedRole = roles;
            },
            (error) => {
                console.log(error);
            }
            );

        this.http.get<Permissions[]>('http://localhost:8080/permissions').subscribe(
            (permission) => {
                this.permissions = permission;
            },
            (error) => {
                console.log(error);
            }
        );
    }

    onRoleChange() {
        this.newrole = {
            roleid: 1,
            roleName: "Example Role",
            rolepermission: [
                {
                    permissionid: 1,
                    roleid: 1,
                    canView: true,
                    canCreate: true,
                    canEdit: true,
                    canDelete: false,
                },
                {
                    permissionid: 2,
                    roleid: 1,
                    canView: true,
                    canCreate: false,
                    canEdit: false,
                    canDelete: true,
                },
                // Vous pouvez ajouter d'autres autorisations pour ce rôle ici
            ],
        };

        console.log('Selected Role ID:');
        // Effectuez une requête HTTP pour récupérer les rolePermissions pour le rôle sélectionné
       /* this.http.get<Role>(`http://localhost:8080/api/roles/`+41).subscribe(
            (role) => {
                this.selectedRole=role;
                this.rolePermission=role.rolepermission;

            },
            (error) => {
                console.log(error);
            }
        );*/
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


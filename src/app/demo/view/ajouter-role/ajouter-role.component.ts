import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Permission, Role} from '../../../models/main.model';
import { RoleService } from '../../service/role';
import {PermissionService} from "../../service/permissionssevice";

@Component({
    selector: 'app-ajouter-role',
    templateUrl: './ajouter-role.component.html',
    styleUrls: ['./ajouter-role.component.css']
})
export class AjouterRoleComponent implements OnInit {
    roleajoutFormGroup!: FormGroup;
    role: any = {}; // Créez un objet pour stocker les données du rôle
    permissions: Permission[];
    constructor(private formBuilder: FormBuilder, private roleService: RoleService, private permissionservice: PermissionService) {
    }

    ngOnInit(): void {
        this.permissionservice.getPermissions().subscribe(data => {
            this.permissions = data;
        });
        this.roleajoutFormGroup = this.formBuilder.group({
            roleName: ['', Validators.required],
            rolePermissions: this.formBuilder.array([
                {permission: 'Paramètres', canView: false, canCreate: false, canEdit: false, canDelete: false},
                // Ajoutez les autres permissions ici
            ])
        });
    }

    addRole() {
        if (this.roleajoutFormGroup.valid) {
            const roleName = this.roleajoutFormGroup.get('roleName').value;
            const rolePermissions = this.roleajoutFormGroup.get('rolePermissions').value;

           /* const  role: Role = {
                roleid: 1,
                roleName: 'Administrateur',
                rolePermissions: [
                    {
                        permission: {
                            permissionid: 1,
                            name: 'Paramètres',
                            shortname: 'param'
                        },
                        canView: true,
                        canCreate: true,
                        canEdit: true,
                        canDelete: true
                    },
                    {
                        permission: {
                            permissionid: 2,
                            name: 'Collaborateur',
                            shortname: 'users'
                        },
                        canView: true,
                        canCreate: true,
                        canEdit: true,
                        canDelete: true
                    },
                ]
            };
       */ }
    }
}

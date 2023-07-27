import {Component, OnInit} from '@angular/core';
import{PermissionService} from '../demo/service/permissions.service';
import {Permission, Role, RolePermission} from "../demo/api/main";
import {RoleService} from "../demo/service/role.service";
import {of} from "rxjs";

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.scss']
})
export class RoleComponent  implements OnInit{
    roleName: string = "";
    permissions: Permission[] = [];
    role  : Role=new Role();
    rolePermissions : RolePermission[] =[];
    canCreat?:boolean;
    canEdit?:boolean;
    canDelete?:boolean;
    canView?:boolean;

    constructor(private permissionService: PermissionService, private roleService: RoleService) { }

    ngOnInit(): void {
        this.loadPermissions();


    }
    addPermission(permission: any): void {
        // Add selected permissions to the array
        if (!this.permissions.some(p => p.name === permission.name)) {
            this.permissions.push(permission);
        }
    }

    createRoleWithPermissions(): void {

        for (const rolepermission of this.rolePermissions) {

                //rolepermission.permissionid = this.permissions.permissionid;
                if (this.canCreat && this.canDelete && this.canEdit && this.canView) {
                    rolepermission.canCreate = this.canCreat;
                    rolepermission.canView=this.canView;
                    rolepermission.canEdit=this.canEdit;
                    rolepermission.canDelete=this.canDelete;
                }






        }

        this.role.rolepermission=this.rolePermissions;

        this.roleService.createRoleWithPermissions(this.role).subscribe(
            response => {
                console.log('Role created successfully!', response);
                // Handle success, e.g., show a success message or navigate to another page.
            },
            error => {
                console.error('Error creating role:', error);
                // Handle error, e.g., show an error message.

            }
        );

    }

    loadPermissions(): void {
        this.permissionService.getPermissions()
            .subscribe(data => this.permissions = data);
    }

}

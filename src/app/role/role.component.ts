import {Component, OnInit} from '@angular/core';
import{PermissionService} from  "../demo/service/permissions.service";
import {Permission} from "../demo/api/main";


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent  implements OnInit{

    permissions: Permission[] = [];
    role : any={};
    constructor(private permissionService: PermissionService) { }

    ngOnInit(): void {
        this.loadPermissions();

    }
    /*createRole() {
        this.roleService.createRole(this.role)
            .subscribe(
                response => {
                    console.log(response);

                    this.role = {};
                },
                error => {
                    console.log(error);
                });
    }*/
    loadPermissions(): void {
        this.permissionService.getPermissions()
            .subscribe(data => this.permissions = data);
    }

    protected readonly PermissionService = PermissionService;
    protected readonly Permissions = Permissions;
}

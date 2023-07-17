import {Component, OnInit} from '@angular/core';
import {EventService} from '../service/eventservice';
import {SelectItem} from 'primeng/api';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ProductService } from '../service/productservice';
import { Product } from '../domain/product';
import {RoleService} from '../service/role';
import {Role} from '../../models/main.model';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./tabledemo.scss'],
    styles: [`
        @media screen and (max-width: 960px) {
            :host ::ng-deep .fc-header-toolbar {
                display: flex;
                flex-wrap: wrap;
            }
        }
    `]
})
export class DashboardDemoComponent implements OnInit {

   roles: Role[];

    constructor(private roleservice: RoleService) { }

    ngOnInit() {
        this.roleservice.getRole().subscribe(data => {
            this.roles = data;
        });
    }

    DeleteRole(roleId: any) {
        this.roleservice.deleteRole(roleId).subscribe(
            () => {
                console.log('Role supprimé avec succès');
            },
            error => {
                console.error('Une erreur s\'est produite lors de la suppression du role :', error);
                // Gérez l'erreur en conséquence
            }
        );

    }
}

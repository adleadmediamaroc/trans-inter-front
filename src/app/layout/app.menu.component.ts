import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'CRM',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                        label: 'Client',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/pages/client']
                    },
                    {
                        label: 'Agent',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/pages/agent']
                    },

                    {
                        label: 'Tâches',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/task']
                    },
                    {
                        label: 'Opportunity',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/opportunity']
                    },
                ]
            },
            {
                label: 'Parametre',
                items: [
                    { label: 'Collaborateurs', icon: 'pi pi-fw pi-home', routerLink: ['/parametre/collaborateur'] },
                    { label: 'Role', icon: 'pi pi-fw pi-home', routerLink: ['/parametre/role'] }
                ]
            },
            {
                label: 'Tarification',
                items: [
                    { label: 'Demandes ', icon: 'pi pi-fw pi-home', routerLink: ['/tarification/demande'] },
                    { label: 'Tarifs', icon: 'pi pi-fw pi-home', routerLink: ['/tarification/tarif'] },
                    { label: 'Offres', icon: 'pi pi-fw pi-home', routerLink: ['/tarification/offre'] }
                ]
            },

        ];
    }
}

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import {AjouterCollaborateurComponent} from "./ajouter-collaborateur/ajouter-collaborateur.component";
import {RoleComponent} from "./role/role.component";
import {DemandeComponent} from "./demo/components/tarification/demande/demande.component";
import {TarifComponent} from "./demo/components/tarification/tarif/tarif.component";
import {OffresComponent} from "./demo/components/tarification/offres/offres.component";
import {AuthModule} from "./demo/components/auth/auth.module";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'app', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'app/demande', component:DemandeComponent, },
                    { path: 'app/tarif', component:TarifComponent, },
                    { path: 'app/offre', component:OffresComponent, },
                    { path: 'app/uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'app/utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'app/documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'app/blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'app/pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'app/ajouterCollaborateur', component: AjouterCollaborateurComponent },
                    { path: 'app/role', component: RoleComponent },

                ]
            },
            { path: 'auth', component: AuthModule},
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },

        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

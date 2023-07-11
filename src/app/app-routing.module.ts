import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {CollaborateursComponent} from './demo/view/collaborateurs.component';
import {AppInvoiceComponent} from './pages/invoice/app.invoice.component';
import {AppHelpComponent} from './pages/help/app.help.component';
import {AppWizardComponent} from './pages/wizard/app.wizard.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {DisplayComponent} from './utilities/display/display.component';
import {ElevationComponent} from './utilities/elevation/elevation.component';
import {FlexboxComponent} from './utilities/flexbox/flexbox.component';
import {GridComponent} from './utilities/grid/grid.component';
import {IconsComponent} from './utilities/icons/icons.component';
import {WidgetsComponent} from './utilities/widgets/widgets.component';
import {SpacingComponent} from './utilities/spacing/spacing.component';
import {TypographyComponent} from './utilities/typography/typography.component';
import {TextComponent} from './utilities/text/text.component';

import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/notfound/app.notfound.component';
import {AppErrorComponent} from './pages/error/app.error.component';
import {AppAccessdeniedComponent} from './pages/accessdenied/app.accessdenied.component';
import {AppLoginComponent} from './pages/login/app.login.component';
import {AppCrudComponent} from './pages/crud/app.crud.component';
import {AppCalendarComponent} from './pages/calendar/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/timelinedemo/app.timelinedemo.component';
import {AjouterRoleComponent} from './demo/view/ajouter-role/ajouter-role.component';
import {AjouterCollaborateurComponent} from './demo/view/ajouter-collaborateur/ajouter-collaborateur.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardDemoComponent},
                    {path: 'dashboards/generic', component: DashboardDemoComponent},
                    {path: 'dashboards/collaborateurs', component: CollaborateursComponent},
                    {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/media', component: MediaDemoComponent},
                    {path: 'uikit/menu', component: MenusDemoComponent},
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'utilities/display', component: DisplayComponent},
                    {path: 'utilities/elevation', component: ElevationComponent},
                    {path: 'utilities/flexbox', component: FlexboxComponent},
                    {path: 'utilities/grid', component: GridComponent},
                    {path: 'utilities/icons', component: IconsComponent},
                    {path: 'utilities/widgets', component: WidgetsComponent},
                    {path: 'utilities/spacing', component: SpacingComponent},
                    {path: 'utilities/typography', component: TypographyComponent},
                    {path: 'utilities/text', component: TextComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'pages/invoice', component: AppInvoiceComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'pages/help', component: AppHelpComponent},
                    {path: 'documentation', component: DocumentationComponent},
                    { path: 'dashboards/generic/ajouterRole', component: AjouterRoleComponent },
                    { path: 'dashboards/collaborateurs/ajouterCollaborateur', component: AjouterCollaborateurComponent }
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'accessdenied', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            {path: 'wizard', component: AppWizardComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

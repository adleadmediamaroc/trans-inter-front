import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { opportunityComponent } from './opportunity.component';
//import { ContactClientComponent } from './ContactClient/contact-client/contact-client.component';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: opportunityComponent },
		//{ path: 'ContactClient/:clientId', component : ContactClientComponent}
		
	])],
	exports: [RouterModule]
})
export class opportunityRoutingModule { }

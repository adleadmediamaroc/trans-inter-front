import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/demo/api/Client';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CountryService } from 'src/app/demo/service/country.service';
import { ClientService } from 'src/app/demo/service/client.service';
import { ContactClient } from 'src/app/demo/api/ContactClient';
import { ContactClientService } from 'src/app/demo/service/contactclient.service';
import { Country } from 'src/app/demo/api/Country';
import { Currency } from 'src/app/demo/api/Currency';
import { CurrencyService } from 'src/app/demo/service/currency.service';
import { StaffService } from 'src/app/demo/service/staff.service';
import { Staff } from 'src/app/demo/api/Staff';



@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService,ClientService,ContactClientService,CurrencyService,CountryService,StaffService]
})
export class CrudComponent implements OnInit {
    countries: Country[] = [];

    currencies: Currency[] =[];

    listStaff: Staff[]=[];

    filteredCountries: any[] = [];

    selectedCountryAdvanced: any[] = [];

   



    client : Client ={};
    clients : Client[] =[];
    contact: ContactClient={};
    clientDialog: boolean = false;
    deleteClientDialog: boolean = false;
 
    submitted: boolean = false;

    cols: any[] = [];


    Total_Clients : number =0;
    Total_Active_Clients : number =0;
    Total_Inactive_Clients : number =0;

    Total_Contacts : number =0;
    Total_Active_Contacts : number =0;
    Total_Inactive_Contacts : number =0;
    FullName:string=" ";
    boolcommercial: boolean=false;
  

    constructor(private clientService: ClientService,private contactService: ContactClientService, private messageService: MessageService, private countryService: CountryService, private currencyService: CurrencyService, private StaffService: StaffService) { }

    ngOnInit() {
        
        this.clientService.countClients().subscribe({next: (data: number)=>{this.Total_Clients =data;}});
        this.clientService.countActiveClients().subscribe({next: (data: number)=>{this.Total_Active_Clients =data;}});
        this.clientService.countInactiveClients().subscribe({next: (data: number)=>{this.Total_Inactive_Clients =data;}});

        this.contactService.countContacts().subscribe({next: (data: number)=>{this.Total_Contacts =data;}});
        this.contactService.countActiveContacts().subscribe({next: (data: number)=>{this.Total_Active_Contacts =data;}});
        this.contactService.countInactiveContacts().subscribe({next: (data: number)=>{this.Total_Inactive_Contacts =data;}});



        //this.productService.getProducts().then(data => this.products = data);
        this.clientService.getClients().subscribe({next: (data: Client[])=>{this.clients=data;console.log(data);}});

        this.countryService.getAllCountries().subscribe({next:(data:Country[])=> {this.countries = data;console.log(data);}});

        this.currencyService.getAllCurrencies().subscribe({next:(data:Currency[])=> {this.currencies=data;console.log(data);}});
        
        this.StaffService.listStaff().subscribe({next:(data:Staff[])=> {this.listStaff=data;console.log(data);}});
        
       
  


    }



     


    ajouterClient(){
        this.boolcommercial=false;
        
        
        this.client = {};
        this.submitted = false;
        this.clientDialog = true;
    }





    editClient(client: Client) {
        this.client = { ...client };
        this.clientDialog = true;

        this.boolcommercial=true;

    }


    //delete client
    deleteClient(client: Client) {
        this.deleteClientDialog = true;
        this.client = { ...client };
    }
    confirmDelete() {
        this.deleteClientDialog = false;
        
        this.clientService.deleteClientById(this.client.clientId!);
        this.clients = this.clients.filter(val => val.clientId !== this.client.clientId);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Client Deleted', life: 3000 });
        this.client = {};
    }

    hideDialog() {
        //this.productDialog = false;
        this.clientDialog = false;
        this.submitted = false;
        this.boolcommercial=false;
        //this.BoolClientDialog=true;
    }
    
/*
    deleteProduct(product: Product) {
        this.deleteProductDialog = true;
        this.product = { ...product };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
        //////
        //this.deleteClientsDialog = false;
        //this.clients = this.clients.filter(val => !this.selectedClients.includes(val));
        //this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'clients Deleted', life: 3000 });
        //this.selectedClients = [];
        //////
    }
    
    filterCountry(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }


 */
    
    saveClient() {
        this.submitted = true;
    }

    /*    



            this.cols = [
            { field: 'company', header: 'company' },
            { field: 'email', header: 'email'},
            { field: 'phoneNumber', header: 'phoneNumber' },
            { field: 'dateCreated', header: 'dateCreated' }
        ]; 


    findIndexByIds(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }
    
    saveProduct() {
        this.submitted = true;

        if (this.product.name?.trim()) {
            if (this.product.id) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                this.products[this.findIndexByIds(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.product.id = this.createId();
                this.product.code = this.createId();
                this.product.image = 'product-placeholder.svg';
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }
    
    findIndexById(id: bigint): bigint {
        let index = -1;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].clientId === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }*/

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}





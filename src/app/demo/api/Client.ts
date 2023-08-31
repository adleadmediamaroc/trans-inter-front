export interface Client {

    clientId?: bigint;
    name?:string;
    company ?: string;
    iceClient?: string;
    phoneNumber?: string;
    email?: string;
    enCours?: number;
    echeance?: number;
    website?: string;
    rc?: string;
    cnss?: string;

    address?: string;
    city?: string;
    zip?: string;
    countryId?: bigint;

    codeComptable?: string;
    codeAuxi?: string;
    defaultCurrencyId?: bigint;
    patente?: number;

    billingStreet?: string;
    billingState?: string;
    billingCity?: string;
    billingZip?: string;
    billingCountryId?: bigint;

    shippingStreet?: string;
    shippingState?: string;
    shippingCity?: string;
    shippingZip?: string;
    shippingCountryId?: bigint;

    dateAffectation?:Date;
    staffFullName?:string;
    staffId?: bigint;

}

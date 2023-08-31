export interface opportunity {
    opportunityid?: bigint;
    clientid?: bigint;
    clientName?:string;
    staffid?: bigint;
    competition?:string;
    startDate?:Date;
    endDate?:Date;
    dateCreated?:Date;
    activity?:string;
    service?: string;
    shipmentType?: string;
    expectedRevenue?: number;
    expectedBigProfit?: number;
    volume?: number;
    volumeUnit?: string;
    shippingCondition?: string;
    origineAddressType?: string;
    origineAddress?: string;
    origineCountry?: string;
    destinationAddressType?: string;
    destinationAddress?: string;
    destinationCountry?: string;
    
    
    

}
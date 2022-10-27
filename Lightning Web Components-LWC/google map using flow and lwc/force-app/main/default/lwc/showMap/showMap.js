import { LightningElement,api,track} from 'lwc';

export default class ShowMap extends LightningElement {
    @api accountDetails; // Gets data  from Screen Flow 
    @track mapMarkers;
  
    handleClick(){
        this.mapMarkers=[{
            location: {
                City: this.accountDetails.BillingCity,
                Country:  this.accountDetails.BillingCountry,
                PostalCode:  this.accountDetails.BillingPostalCode,
                State: this.accountDetails.BillingState,
                Street:  this.accountDetails.BillingStreet,
            },
            title:          this.accountDetails.Name +' \'s Billing Address',
            description:    this.accountDetails.BillingCountry+', '
                            +this.accountDetails.BillingState+', '
                            +this.accountDetails.BillingCity,
          }];
        }
}
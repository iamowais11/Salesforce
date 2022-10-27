import { LightningElement,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import { reduceErrors } from 'c/ldsUtils';

const COLUMNS = [
    { label: 'First Name', fieldName: FIRSTNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Last Revenue', fieldName: LASTNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'IndusEmail', fieldName: EMAIL_FIELD.fieldApiName, type: 'email' }
];

export default class ContactList extends LightningElement {

    columns=COLUMNS;

    conResult;
    errors;



    

    @wire(getContacts)
    wiredData({data,error}){
        if(data){

            this.conResult=data;
            
            this.errors=undefined;
            alert(this.conResult);
        }else if(error){
            alert('fail');
            this.conResult=undefined;
            this.errors=error;
            alert(this.errors);

        }
    }

    get errors() {
        return (this.errors) ?
            reduceErrors(this.errors) : [];
    }
}
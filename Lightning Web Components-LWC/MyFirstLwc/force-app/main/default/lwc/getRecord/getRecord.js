import { LightningElement, wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from "@salesforce/schema/Account.Name";

export default class GetRecord extends LightningElement {

    @wire(getRecord,{recordId:"0015i000005MsQIAA0",fields:[NAME_FIELD],})
    account;

    get name(){
        return getFieldValue(this.account.data,NAME_FIELD);
    }
}
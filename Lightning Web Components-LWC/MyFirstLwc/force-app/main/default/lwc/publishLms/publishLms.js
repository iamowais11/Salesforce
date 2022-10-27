import { LightningElement ,wire} from 'lwc';

import { publish,MessageContext } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";

export default class PublishLms extends LightningElement {


   

    @wire(MessageContext)
    messageContext;
   

    //record=this.messageContext;
    publishMethod(event){
       
        alert("Data published to message channel");
        //alert(this.messageContext);
        const payload={recordId:"Data In Message Channel"};
        publish(this.messageContext,SAMPLEMC,payload);


        

    }    

}
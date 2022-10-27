import { LightningElement, wire } from 'lwc';

import { subscribe,unsubscribe,MessageContext,APPLICATION_SCOPE } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
export default class SubscribeLms extends LightningElement {

   subscription=null;
   messageChannelData="";

    @wire(MessageContext)
    messageContext;


   

    subscribeToMessageChannel(){
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                SAMPLEMC,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }

    }

    handleMessage(message) {
        
        this.messageChannelData=message.recordId;
    }

    unSubscribeToMessageChannel(){
      unsubscribe(this.subscription);
      this.subscription=null;

    }


    connectedCallback(){
       
        alert("Message Channel Subscribed");
        this.subscribeToMessageChannel();
    }
    disconnectedCallback(){
       alert("Message Channel Unsubscribed");
        this.unSubscribeToMessageChannel();
    }
}
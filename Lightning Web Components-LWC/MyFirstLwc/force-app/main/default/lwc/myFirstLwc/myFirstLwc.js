import { api, LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/MyFirstLwcWithApex.getContacts';
import getAccounts from '@salesforce/apex/MyFirstLwcWithApex.getAccounts';

export default class MyFirstLwc extends LightningElement {

    testVar="some string";
    variableValue="First Lwc Variable";
    inputTextVariable="";
    result;
    error;
    accResult;
    accError;
    acc_id='0015i000005MsQIAA0';

    @api message="This is a public property and can be accessed child component as well";
    
    handleChange(event){
        //alert("changing text");
        this.inputTextVariable=event.target.value;
        this.testVar= !this.testVar;  //if non zero then true else false
        alert(this.testVar);
        alert('hello');

    }

    @wire(getContacts,{acc_id:'$acc_id'})
    wiredData({data,error}){
        if(data){

            this.result=data;
            
            this.error=undefined;
            alert(this.result);
        }else if(error){
            alert('fail');
            this.result=undefined;
            this.error=error;

        }
    }
    handleClick(){
        getAccounts({acc_id:this.acc_id})
            .then(result => {
                this. accResult=result;
                alert(this.accResult);
            })
            .catch(error => {
                // TODO Error handling
                this.accError=error;
            });
    }
}
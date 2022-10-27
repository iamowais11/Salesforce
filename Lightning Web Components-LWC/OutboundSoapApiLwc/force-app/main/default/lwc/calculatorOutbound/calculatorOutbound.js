import { LightningElement } from 'lwc';
import addNumbers from '@salesforce/apex/HelperCalculatorOutBoundApi.addNumbers'
export default class CalculatorOutbound extends LightningElement {

  
    total;

    doAdd(event){

       let num1=this.template.querySelector('lightning-input[data-name=input1]').value;
       let num2=this.template.querySelector('lightning-input[data-name=input2]').value;
            
        addNumbers({a:num1,b:num2})
            .then(result => {
                alert(result);
                this.total=result
            })
            .catch(error => {
                alert(error.message);
            });

    }
    
}
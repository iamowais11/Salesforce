import { LightningElement } from 'lwc';

export default class LdsWithLwc extends LightningElement {
    handleError(){

        alert('error');
    }
    handleSuccess(){
        alert('success');
    }
    handleSubmit(){
        alert('submit');  
    }
}
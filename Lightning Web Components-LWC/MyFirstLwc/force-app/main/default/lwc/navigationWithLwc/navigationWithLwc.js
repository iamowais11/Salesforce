import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationWithLwc extends NavigationMixin(LightningElement) {


    navigateToRecordPage(){
        alert('j');
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "home",
                objectApiName: "Account"
            }
        });
    }
}
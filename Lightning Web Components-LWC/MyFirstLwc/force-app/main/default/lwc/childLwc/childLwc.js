import { LightningElement,api } from 'lwc';

export default class ChildLwc extends LightningElement {
    @api childvar="I am a child propert";


    childLwcMethod(name){
        this.childvar=name;
    }

    passDataToParent(){
        alert('h');
        this.dispatchEvent( new CustomEvent( 'childbuttonclick', {
            detail: {
                key:'123',
                name:'sdss',
                param:'ooo'

            }
        } ) );


        
    }


    }

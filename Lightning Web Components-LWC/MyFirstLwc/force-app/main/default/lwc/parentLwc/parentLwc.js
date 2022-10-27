import { LightningElement } from 'lwc';

export default class ParentLwc extends LightningElement {
    parentvar="I  am Parent Component";

    handleClick(){
        this.parentvar="Message Changed From Parent";
        //this.template.querySelector('c-child-Lwc').childLwcMethod(this.parentvar);
    }

    handleEvent(event){
        
        let key=event.detail.key;
        alert(key);
        let name=event.detail.name;
        let param=event.detail.param;
        alert(name);
        alert(param);

    }
}
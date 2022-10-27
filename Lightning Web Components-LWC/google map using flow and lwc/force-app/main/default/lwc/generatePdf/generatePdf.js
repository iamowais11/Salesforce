import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {loadScript} from "lightning/platformResourceLoader";
import JSPDF from '@salesforce/resourceUrl/jspdf';
import getAccounts from '@salesforce/apex/FetchAccounts.getAccounts';

export default class GeneratePdf extends LightningElement {

accResult=[];  //Holds account records fetched from apex class

headers = this.createHeaders([
    "Id",
    "Name",
]);  //Header labels for  data table

renderedCallback() {
    Promise.all([
        loadScript(this, JSPDF)
    ]);
}
//Saves account records in pdf format
generatePdf(){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Salesforce Accounts", 20, 20);
    doc.table(30, 30, this.accResult,this.headers,{ autosize:true });
    doc.save("sf-accounts.pdf");

     //show success message
     this.dispatchEvent(
        new ShowToastEvent({
            title: 'Success',
             message: 'PDF generated and saved successfully',
            variant: 'success',
        }),
    );
}

//Button Click Handler - "Generate Pdf : 1"
fetchApexData(){
//Call apex class method
    getAccounts()
        .then(result => {
        this.accResult=result;
        alert(JSON.stringify(this.accResult));
        //Calls generatePdf function
        this.generatePdf();
        })
}


//Initialize headers with retrieved fields
createHeaders(keys) {
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
        result.push({
            id: keys[i],
            name: keys[i],
            prompt: keys[i],
            width: 65,
            align: "center",
            padding: 0
        });
    }
    return result;
}


}
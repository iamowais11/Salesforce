public with sharing class HelperCalculatorOutBoundApi {
    

    @AuraEnabled
     public static integer addNumbers(integer a,integer b) {
        SoapOutboundCalApi.CalculatorSoap calobj=new SoapOutboundCalApi.CalculatorSoap();
        return calobj.Add(a,b);
    }
}

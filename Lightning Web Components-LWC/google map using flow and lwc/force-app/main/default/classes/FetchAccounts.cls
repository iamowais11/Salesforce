public with sharing class FetchAccounts {
    //For Method 1- Used in VF page
    //Instance Variable
        public  List <Account> accList{get; set;}  //get>> when property is read and set>> when property is written
        public FetchAccounts(ApexPages.StandardController stdController){  //For making it visible in quick actions
            accList=[select Id,Name from account WITH SECURITY_ENFORCED];
    }

//For Method 2 - Calling From Lwc
@AuraEnabled(cacheable=true)
public static List<Account> getAccounts(){
    try {
        List <Account> accList=[select Id,Name from account WITH SECURITY_ENFORCED];
        return accList;
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
  }
}

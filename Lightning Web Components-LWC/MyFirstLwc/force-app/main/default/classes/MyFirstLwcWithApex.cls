public with sharing class MyFirstLwcWithApex {
    public MyFirstLwcWithApex() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String acc_id){
        try {
            return [select accountid, name from contact where accountid=:acc_id];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

      
    }
    

    @AuraEnabled
    public static List<Account> getAccounts(String acc_id){
        try {
            return [select id,name from account where id=:acc_id];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

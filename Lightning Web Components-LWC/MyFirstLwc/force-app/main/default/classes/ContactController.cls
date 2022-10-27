public with sharing class ContactController {
    public ContactController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
       /* try {
            return [select FirstName, LastName, Email from contact];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }*/

        throw new AuraHandledException('Forced error');
    }
}

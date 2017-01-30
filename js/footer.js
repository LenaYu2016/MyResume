class Footer{
    constructor(me){
      this.me=me;
    }
    display(){
        let contact='';

        for(let prop in this.me.contact){
            if(this.me.contact.hasOwnProperty(prop) && this.me.contact[prop]) {
                let recontact = HTMLcontactGeneric.replace('%contact%', prop);
                contact += recontact.replace('%data%', this.me.contact[prop]);
            }
        }
        $('#footerContacts').append(contact);
    }
}
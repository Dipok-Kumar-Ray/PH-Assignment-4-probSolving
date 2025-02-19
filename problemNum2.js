function validContact(contact){
    if(contact.length !== 11 && contact.startsWith !== "01"){
    return false;
    }


    if(!/^\d+$/.test(contact)) {
    return false;
    }

    if(contact !== "string"){
        return "Invalid"
    }

    return true;

    }

    
  
    console.log(validContact("01778493511"));
    console.log(validContact(["01778493511"]));

    console.log(validContact("01723456789"));
import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { uuid } from "uuidv4";

const Section = ()=> {

    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);
    const AddContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, {id: uuid(), ...contact }]);
    };
    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(newContactList);
    };

    useEffect(() => {
        const RetrieveContacts =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(RetrieveContacts) setContacts(RetrieveContacts);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
    // const contacts = [
    //     {
    //         id: "1",
    //         "name": "obaid",
    //         "email": "obaid@mail.com"
    //     },
    //     {
    //         id: "2",
    //         "name": "obaid 2",
    //         "email": "obaid2@mail.com"
    //     },
    // ];
    return(        
        <section className="sectionwrapper">
            <div className="dipslaydata dataform">                
                <ContactList contacts={contacts} getContactID = {removeContactHandler}/>
            </div>
            <div className="getdata dataform">                
                <AddContact AddContactHandler = {AddContactHandler}/>
            </div>
        </section>
    )
}

export default Section;
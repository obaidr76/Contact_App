import React from "react";
import ContactCard from "./ContactCard";
import 'font-awesome/css/font-awesome.min.css';


const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactID(id);
    };
    const renderlist = props.contacts.map((contact) => {
        return(
            <div className="contact_container">
                <ContactCard contact={contact} clickHandler = {deleteContactHandler} key ={contact.id}></ContactCard>
            </div>
        );

    })

    return(
        <div>
            <h2>Contact List</h2>
        <div className="ui celled list">{renderlist}</div>
        </div>
    )
};

export default ContactList;
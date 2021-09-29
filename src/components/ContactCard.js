import React from "react";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return(
        <div className="item">
            <div className="content">
                <div className="head">{name}</div>
                <div className="head">{email}</div>
            </div>
            <i className="fa fa-trash" aria-hidden="true" onClick={() => props.clickHandler(id)}></i>
        </div>
    );

};

export default ContactCard;

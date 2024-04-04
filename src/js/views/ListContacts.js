import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';


const ListContacts = () => {
    const { store, actions } = useContext(Context);

    console.log(store);

    return (
    <div className="contact-list">
        <div className='new-contact-button'>
        <Link to="/addContact">Add new contact</Link>
        </div>

    {store.contacts.map((contact) => (
    <Contact
        key={contact.id}
        {...contact}
        onDelete={() => onDeleteContact(contact.id)}
    />
))}
</div>
    )
    };
    

    const Contact = (props) => {
        const { store, actions } = useContext(Context);

        return (
            <div className="contact-slot">
                <ul>
                    <div className="name-row">
                    <span className="name-contact-row">{props.name}</span>
                    <span className="garbage-icon">
                    <button onClick={() => {actions.fetchDeleteOneContact(props.id)}} style={{ cursor: "pointer" }}>
                    <i className="fa-solid fa-trash"></i></button>
                </span>

                    </div>
                    <li className="address-contact-row"><i className="fa-solid fa-location-dot m-1"></i>{props.address}</li>
                    <li className="phone-contact-row"><i className="fa-solid fa-phone-flip m-1"></i>{props.phone}</li>
                    <li className="email-contact-row"><i className="fa-solid fa-envelope m-1"></i>{props.email}</li>
                </ul>

            </div>
                )

    };

export default ListContacts;
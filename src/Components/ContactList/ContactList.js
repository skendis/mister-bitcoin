import React from 'react';
import ContactPreview from '../ContactPreview/ContactPreview.js'
const ContactList = ({ contacts }) => {
    const list = contacts.map(contact => {
        return (<ContactPreview contact={contact} key={contact._id}/>)
    })
    return (
        <ul className="contact-list flex column">
            {list}
        </ul>
    )
}

export default ContactList;
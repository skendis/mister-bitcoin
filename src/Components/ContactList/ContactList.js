import React from 'react';
import ContactPreview from '../ContactPreview/ContactPreview.js'
import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => {
    const list = contacts.map(contact => {
        return (
            <Link to={`/contact/${contact._id}`} key={contact._id}><ContactPreview contact={contact}  /></Link>
        )
    })
    return (
        <ul className="contact-list flex column">
            {list}
        </ul>
    )
}

export default ContactList;
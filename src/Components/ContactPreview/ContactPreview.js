import React from 'react';
import userIcon from '../../assets/man.svg'
const ContactPreview = ({ contact }) => {
    const { name } = contact;
    return (
        <li className="contact-preview flex align-center">
            <img className="profile-img" src={userIcon} alt="logo" />
            <div className="name">{name}</div>
        </li>
    )
}

export default ContactPreview;
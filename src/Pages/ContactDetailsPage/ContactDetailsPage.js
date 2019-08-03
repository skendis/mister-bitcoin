import React, { Component } from 'react';
import profilePic from '../../assets/man.svg'
import ContactService from '../../services/ContactService.js'
class ContactDetailsPage extends Component {

    state = {
        contact: {
            name: null,
            phone: null,
            email: null
        }
    }


    //hardCoded but will get the id from Url after router will be installed
    componentWillMount = async () => {
        const contact = await ContactService.getContactById('5a56640269f443a5d64b32ca');
        this.setState({contact:contact});
    }
    render() {
        return (
            <div className="contact-details">
                <img className="profile-img" src={profilePic} alt="" />
                <h2>Name: {this.state.contact.name}</h2>
                <h2>Phone: {this.state.contact.phone}</h2>
                <h2>Email: {this.state.contact.email}</h2>
            </div>
        )
    }
}

export default ContactDetailsPage;
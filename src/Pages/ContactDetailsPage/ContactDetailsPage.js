import React, { Component } from 'react';
import profilePic from '../../assets/man.svg'
import ContactService from '../../services/ContactService.js'
import { Link } from 'react-router-dom';
class ContactDetailsPage extends Component {

    state = {
        contact: {
            _id:null,
            name: null,
            phone: null,
            email: null
        }
    }

    componentDidMount = async () => {
        const contact = await ContactService.getContactById(this.props.match.params.id);
        this.setState({contact:contact});
    }
    render() {
        return (
            <div className="contact-details">
                <img className="profile-img" src={profilePic} alt="" />
                <h2>Name: {this.state.contact.name}</h2>
                <h2>Phone: {this.state.contact.phone}</h2>
                <h2>Email: {this.state.contact.email}</h2>

                <Link to={`/contacts`}><button className="app-btn default-clr">Back</button></Link>
                <Link to={`/contact/${this.state.contact._id}/edit`}><button className="app-btn edit-clr">Edit</button></Link>
            </div>
        )
    }
}

export default ContactDetailsPage;
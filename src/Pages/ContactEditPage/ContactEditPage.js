import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import ContactService from '../../services/ContactService.js';
import profilePic from '../../assets/man.svg';

class ContactEditPage extends Component {
    state = {
        data: {
            name: '',
            phone: '',
            email: ''
        }
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            const contact = await ContactService.getContactById(this.props.match.params.id);
            this.setState({ data: contact });
        }
    }
    handleTxtChange = (event) => {
        const { value, name } = event.target;
        this.setState((state) => { return { data: { ...state.data, [name]: value } } })
    }
    handleSubmit = async () => {
        await ContactService.saveContact(this.state.data);
        const { history } = this.props;
        history.push("/contacts");
    }
    handleDelete = async () => {
        await ContactService.deleteContact(this.state.data._id);
        const { history } = this.props;
        history.push("/contacts");
    }
    render() {
        return (
            <div className="contact-details">
                <img className="profile-img" src={profilePic} alt="" />
                <input className="app-input" type="text" name="name" value={this.state.data.name} onChange={this.handleTxtChange} placeholder="enter name" />
                <input className="app-input" type="text" name="phone" value={this.state.data.phone} onChange={this.handleTxtChange} placeholder="enter phone" />
                <input className="app-input" type="text" name="email" value={this.state.data.email} onChange={this.handleTxtChange} placeholder="enter email" />
                <button className="app-btn default-clr" onClick={this.handleSubmit} >Save</button>
                <Link to={`/contacts`}><button className="app-btn clear-clr">back</button></Link>
                {this.state.data._id ? <button onClick={this.handleDelete}>Delete</button> : ''}
            </div>
        )
    }
}

export default ContactEditPage;
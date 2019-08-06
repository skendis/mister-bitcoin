import React, { Component } from 'react';
import ContactList from '../../Components/ContactList/ContactList.js'
import ContactService from '../../services/ContactService.js'
import ContactFilter from '../../Components/ContactFilter/ContactFilter.js'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ContactPage extends Component {

  async componentDidMount() {
    const contacts = await ContactService.getContacts();
    this.setState({ contacts: contacts });
  }
  contactSearch = async (event) => {
    const filterTerm = event.target.value;
    const searchRes = await ContactService.getContacts({ term: filterTerm });
    this.setState({ contacts: searchRes });
  }


  render() {
    const { contacts } = this.props;
    return (
      <div>
        <ContactFilter onFilter={this.contactSearch} />
        <ContactList contacts={contacts} />
        <Link to={`/contact/edit`}><button className="add-btn">+</button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.rootReducer.contacts
  }
}

export default connect(mapStateToProps)(ContactPage);

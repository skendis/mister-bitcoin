import React, { Component } from 'react';
import ContactList from '../../Components/ContactList/ContactList.js'
import ContactService from '../../services/ContactService.js'
import ContactFilter from '../../Components/ContactFilter/ContactFilter.js'

class ContactPage extends Component {

  componentWillMount = async () => {
    const contacts = await ContactService.getContacts();
    this.setState({ contacts: contacts });
  }
  contactSearch = async (event) => {
    const filterTerm = event.target.value;
    const searchRes = await ContactService.getContacts({ term: filterTerm });
    this.setState({ contacts: searchRes });
  }

  state = {
    contacts: []
  }

  render() {
    return (
      <div>
        <ContactFilter onFilter={this.contactSearch} />
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}
export default ContactPage;

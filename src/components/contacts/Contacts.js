import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../Context';

class Contacts extends Component {
  // constructor (){
  //     super();
  //     this.state = {
  //         contacts: [
  //             {id: 1, name: 'Nabeel', email: 'nabe@gmail.com', phone: "444-444-44444"},
  //             {id: 2, name: 'Athar', email: 'athr@gmail.com', phone: "999-0000-7777"},
  //             {id: 3, name: 'Waseem', email: 'wa@gmail.com', phone: "333-222-3333"}
  //         ]
  //     }
  // }

  // deleteContact = (id) => {
  //     const {contacts} = this.state;
  //     const newContacts  = contacts.filter((contact)  => contact.id !==id);
  //     this.setState({contacts: newContacts});
  // };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span>
                List
              </h1>
              {contacts.map((contact) => (
                <Contact
                  // key= {contact.id}
                  // name= {contact.name}
                  // email =  {contact.email}
                  // phone ={contact.phone}
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler = {this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;

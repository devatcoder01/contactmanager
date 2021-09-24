import React, { Component } from 'react';
import { Consumer } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/textInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone, errors } = this.state;

    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newContact = {
      name: name,
      email: email,
      phone: phone,
    };

    // const action = { type: 'ADD_CONTACT', payload: res.data };
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );

    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    this.setState({ name: '', email: '', phone: '' });

    this.props.history.push('/');
  };

  // onEmailChange = (e) => this.setState({email: e.target.value});
  // onPhoneChange = (e) => this.setState({phone: e.target.value});
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  ></TextInputGroup>

                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.onChange}
                    type="email"
                    error={errors.email}
                  ></TextInputGroup>

                  <TextInputGroup
                    label="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  ></TextInputGroup>

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

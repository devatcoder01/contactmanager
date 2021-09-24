import React, { Component } from 'react';
import { Consumer } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/textInputGroup';
import axios from 'axios';
import Contact from './Contact';

class UpdateContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }

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

    // const action = { type: 'ADD_CONTACT', payload: res.data };

    const updateContact = { name, email, phone };

    const { id } = this.props.match.params;

    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        updateContact
      );
      dispatch({ type: 'UPDATE_CONTACT', payload: res.data });
    } catch (e) {
      dispatch({ type: 'UPDATE_CONTACT', payload: updateContact });
    }
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

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
              <div className="card-header">Update Contact</div>
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
                    value="Update Contact"
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

export default UpdateContact;

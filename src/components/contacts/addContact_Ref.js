import React, { Component } from 'react';
import { Consumer } from '../../Context';
import Contact from './Contact';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  static defaultProps = {
    name: 'javed',
    email: 'jaiq01@hotmail.com',
    phone: '03334465534',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const Contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };

    console.log(Contact);
  };

  // onEmailChange = (e) => this.setState({email: e.target.value});
  // onPhoneChange = (e) => this.setState({phone: e.target.value});
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter Name....."
                className="form-control form-control-lg"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter Email....."
                className="form-control form-control-lg"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                name="phone"
                type="text"
                placeholder="Enter Phone....."
                className="form-control form-control-lg"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;

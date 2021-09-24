import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { right } from '@popperjs/core';

class Contact extends Component {
  //   static propTypes  =  {
  //         name: PropTypes.string.isRequired,
  //         email: PropTypes.string.isRequired,
  //         phone: PropTypes.string.isRequired,
  //     }
  // constructor() {
  //     super();
  //     this.state = {};
  //     this.onShowClick = this.onShowClick.bind(this);
  // }
  state = { showContactInfo: false };
  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = async (id, dispatch) => {
    // this.props.deleteClickHandler();
    const action = { type: 'DELETE_CONTACT', payload: id };
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch(action);
    } catch (e) {
      dispatch(action);
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                ></i>
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>

                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      float: 'right',
                      cursor: 'pointer',
                      marginRight: '1rem',
                      color: 'orange',
                    }}
                  ></i>
                </Link>
              </h4>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.defaultProps = { name: 'loota', email: 'Mota', phone: 'Null' };
Contact.propsTypes = {
  contact: PropTypes.object.isRequired,
  // deleteClickHandler: PropTypes.func.isrequired
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired,
};
export default Contact;

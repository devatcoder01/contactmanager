import React, { Component } from 'react';
export default (props) => {
  return (
    <div>
      <h1 className="display-4">
        {' '}
        <span className="text-danger">404</span> Page Not found
      </h1>
      <p className="lead">Sorrry this page does not exist</p>
      <p className="text-secondary">version 1.0.0</p>
    </div>
  );
};

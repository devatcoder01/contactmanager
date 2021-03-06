import React, { Component } from 'react';

class Test extends Component {
  state = { title: '', body: '' };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => this.setState({ title: data.title, body: data.body }));
  }

  // componentWillMount() {
  //   console.log('componentWilMount....call');
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate....call');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate....call');
  // }
  // UNSAFE_componentWillReceiveProps() {
  //   console.log('commmrecevepropps...s');
  // }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h4>Title: {title}</h4>
        <p> Body: {body}</p>
      </div>
    );
  }
}

export default Test;

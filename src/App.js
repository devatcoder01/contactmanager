import Contacts from './components/contacts/Contacts';
import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';
import AddContact from './components/contacts/addContact';
import UpdateContact from './components/contacts/updateContact';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import Test from './components/test/Test';
function App() {
  // how return looks when written into javascript without syntaticsugar
  // return React.createElement(
  //   'div',
  //   {className: "App"},
  //   React.createElement('h1', null, "The App Component")
  // );

  // const name = "javed Iqbal";
  // const showName = false;
  // const showMath = true;
  // let math;

  // const num1 = 50;
  // const num2 = 40;

  // if(showMath){

  //  math= <h4>{num1}+{num2} = {num1+num2}</h4>;

  // }else
  // {
  //   math= null;
  // }
  return (
    <Provider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          {/* {showName ?<h4>{name.toUpperCase()}</h4> :null}
     {math} */}
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact component={Contacts} path="/"></Route>
              <Route exact component={AddContact} path="/contact/add"></Route>
              <Route
                exact
                component={UpdateContact}
                path="/contact/edit/:id"
              ></Route>
              <Route exact component={About} path="/about"></Route>
              <Route exact component={Test} path="/test"></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

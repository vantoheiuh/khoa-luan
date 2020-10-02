import React, { Component } from 'react';
import DeviceManager from './DeviceManager/DeviceManager';
import NewDevice from './components/NewDevice/NewDevice';
import {
  BrowserRouter as Router,
  Switch, NavLink,
  Route,
} from "react-router-dom";
import  './components/Menu/Menu.css';
import NotFound from './components/NotFound/NotFound';
import Statistical from './components/Statistical/Statistical';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <header className="header">
          <nav className="header_navbar">
              <ul className="header_navbar-list">
                  <li className="header_navbar-list-item">
                      <NavLink to="/" exact activeClassName="my-active" className="link">HOME</NavLink>
                  </li>
                  <li className="header_navbar-list-item">
                      <NavLink to="/new-device"  activeClassName="my-active" className="link" >NEW DEVICE</NavLink>
                  </li>
                  <li className="header_navbar-list-item">
                      <NavLink to="/statistical"  activeClassName="my-active" className="link" >STATISTICAL</NavLink>
                  </li>
                  <li className="header_navbar-list-item">
                      <NavLink to="/login" activeClassName="my-active" className="link"  >LOGIN</NavLink>
                  </li>
              </ul>
          </nav>
          </header>
          <Switch>
            <Route path="/" exact component={DeviceManager}/>
            <Route path="/new-device"  component={NewDevice}/>
            <Route path="/statistical"  component={Statistical}/>
            <Route  component={NotFound}/>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;

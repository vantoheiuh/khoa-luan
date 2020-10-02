import React, { Component } from 'react';
import LiquidationTable from './LiquidationTable/LiquidationTable';
import MaintenanceTable from './MaintenanceTable/MaintenanceTable';

import './Statistical.css'
import {
    BrowserRouter as Router,
    Switch, NavLink,
    Route,
  } from "react-router-dom";
import DeviceRoomTable from './DeviceRoom/DeviceRoomTable';
class Statistical extends Component {
    
    render() {
        return (
                <div className="wapper">
          <Router>
                    <div className="nav-left">
                        <h3 className="display-3 text-xs-center"> Menu </h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <NavLink to="/" exact activeClassName="my-active" className="link">BIỂU ĐỒ THỐNG KÊ</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink to="/statistical" exact activeClassName="my-active" className="link">THIẾT BỊ CẦN THANH LÝ</NavLink>
                               
                            </li>
                            <li className="list-group-item">
                                <NavLink to="/maintenance" exact activeClassName="my-active" className="link">THIẾT BỊ CẦN BẢO TRÌ</NavLink>
                               
                            </li>
                            <li className="list-group-item">
                                <NavLink to="/deviceroom" exact activeClassName="my-active" className="link">THIẾT BỊ TRONG PHÒNG BAN</NavLink>
                            </li>
                            
                        </ul>
                    </div>
           
            <Switch>
                <Route path="/statistical" exact component={LiquidationTable}/>
                <Route path="/maintenance" exact component={MaintenanceTable}/>
                <Route path="/deviceroom" exact component={DeviceRoomTable}/>

          </Switch>
        </Router>
         
            </div>
        );
    }
}

export default Statistical;
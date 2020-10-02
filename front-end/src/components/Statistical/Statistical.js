import React, { Component } from 'react';
import LiquidationTable from './LiquidationTable/LiquidationTable';
import MaintenanceTable from './MaintenanceTable/MaintenanceTable';
import NotFound from '../NotFound/NotFound';

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
                                <NavLink to="/statistical" exact activeClassName="my-active" className="link">BIỂU ĐỒ THỐNG KÊ</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink to="/statistical/expired" exact activeClassName="my-active" className="link">THIẾT BỊ CẦN THANH LÝ</NavLink>
                               
                            </li>
                            <li className="list-group-item">
                                <NavLink to="/statistical/maintenance" exact activeClassName="my-active" className="link">THIẾT BỊ CẦN BẢO TRÌ</NavLink>
                               
                            </li>
                            <li className="list-group-item">
                                <NavLink to="/statistical/deviceroom" exact activeClassName="my-active" className="link">THIẾT BỊ TRONG PHÒNG BAN</NavLink>
                            </li>
                            
                        </ul>
                    </div>
           
            <Switch>
                <Route path="/statistical" exact component={NotFound}/>
                <Route path="/statistical/expired" exact component={LiquidationTable}/>
                <Route path="/statistical/maintenance" exact component={MaintenanceTable}/>
                <Route path="/statistical/deviceroom" exact component={DeviceRoomTable}/>

          </Switch>
        </Router>
         
            </div>
        );
    }
}

export default Statistical;
import React, { Component } from 'react';
import './MaintenanceTable.css';
import MaintenanceRow from './MaintenanceRow/MaintenanceRow';
import axios from 'axios';
class MaintenanceTable extends Component {
    state = {
        maintenanceTable: [],
        dataFilter: []
    }
    componentDidMount() { 
        axios.get('/api/products')
          .then(res => {
            //console.log(res.data)
            this.setState({
              maintenanceTable: res.data,
              dataFilter: res.data
           });
          })
          .catch(err => {
            console.log(err);
          })
      }
      isChangeMainternance = (event,data)=>{
        const name = event.target.value;
        var today = new Date();
        const dataFil = data.filter(item => {
          const exTime =item.checkinTime.slice(0,10).split('-');
          const exMaintain = new Date(parseInt(exTime[0]) + item.activeTime, parseInt(exTime[1]), parseInt(exTime[2]));
          const exLiquid = new Date(parseInt(exTime[0]) + item.activeTime + item.expiredTime, parseInt(exTime[1]), parseInt(exTime[2]));
          const lastMonth = new Date(today.getFullYear(), name, 0);
          return lastMonth.getTime() >= exMaintain.getTime() && lastMonth.getTime() < exLiquid.getTime();
        });
        this.setState({maintenanceTable: dataFil});
      }
    render() {
        let listLiquidationTable = this.state.maintenanceTable.map((item,index)=>{
            return( 
                <MaintenanceRow key={index} stt={index + 1}
                name={item.name} 
                price={item.price} 
                amount={item.amount} 
                checkinTime={item.checkinTime.slice(0,10)} 
                expiredTime={item.expiredTime} 
                activeTime={item.activeTime} 
                quantity={item.quantity} 
                source={item.source} 
                statusDevice={item.statusDevice} 
                locate={item.locate} 
                edit={(user)=>this.props.edit(item)} 
                delete={()=>this.props.delete(item._id, item.name)}/>
            )
        })
        return (
            <div className="content-right">
              <label className="lable-title-liquidation">THIẾT BỊ CẦN BẢO TRÌ TRONG THÁNG: </label> <br/>
                <select className="select-Month-liquidation" name="mainternance" onChange={(event) => this.isChangeMainternance(event,this.state.dataFilter)} required>
                  <option value={1} >January</option>
                  <option value={2}>February</option>
                  <option value={3}>March</option>
                  <option value={4}>April</option>
                  <option value={5}>May</option>
                  <option value={6}>June</option>
                  <option value={7}>July</option>
                  <option value={8}>August</option>
                  <option value={9}>September</option>
                  <option value={10}>October</option>
                  <option value={11}>November</option>
                  <option value={12}>December</option>
                </select>
                <table className="TableDataStatistical">
                  <thead>
                    <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Checkin Time</th>
                    <th>Active Time</th>
                    <th>ex Time</th>
                    <th>Quantity</th>
                    <th>Source</th>
                    <th>Locate</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listLiquidationTable}
                  </tbody>
                </table>
            </div>
        );
    }
}

export default MaintenanceTable;
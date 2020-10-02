import React, { Component } from 'react';
import './LiquidationTable.css';
import LiquidationTableRow from './LiquidationTableRow/LiquidationTableRow';
import axios from 'axios';
class LiquidationTable extends Component {
    state = {
      liquidationTable: [],
      dataFilter: []
    }
    componentDidMount() { 
        axios.get('/api/products')
          .then(res => {
            //console.log(res.data)
            this.setState({
              liquidationTable: res.data,
              dataFilter: res.data
           });
          })
          .catch(err => {
            console.log(err);
          })
      }
      isChangeLiquidation = (event,data)=>{
        this.setState({liquidationTable: this.state.dataFilter})
        const name = event.target.value;
     
        var today = new Date();
        const dataFil = data.filter(item => {
          const exTime =item.checkinTime.slice(0,10).split('-'); //cho vào mảng
         //console.log(parseInt(exTime[0]));
          const exDate = new Date(parseInt(exTime[0]) + item.activeTime + item.expiredTime, parseInt(exTime[1]), parseInt(exTime[2]));
          //console.log(exDate);
          const lastMonth = new Date(today.getFullYear(), name, 0);
          console.log(lastMonth);
          return lastMonth.getTime() >= exDate.getTime();
        });
        this.setState({liquidationTable: dataFil});
      }
    render() {
      let listLiquidationTable = this.state.liquidationTable.map((item,index)=>{
            return( 
                <LiquidationTableRow key={index} stt={index + 1}
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
              <label className="lable-title-liquidation">THIẾT BỊ SẮP THANH LÝ THEO THÁNG: </label> <br/>
                <select className="select-Month-liquidation" name="liquidation" onChange={(event) => this.isChangeLiquidation(event,this.state.dataFilter)} required>
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
                    <th>  Active Time</th>
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

export default LiquidationTable;
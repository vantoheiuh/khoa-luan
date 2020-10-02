import React, { Component } from 'react';
import './DeviceRoomTable.css';
import DeviceRoomRow from './DeviceRoomRow/DeviceRoomRow';
import axios from 'axios';
class DeviceRoomTable extends Component {
    state = {
        deviceRoom: [],
        dataFilter: []
    }
    componentDidMount() { 
        axios.get('/api/products')
          .then(res => {
            //console.log(res.data)
            this.setState({
                deviceRoom: res.data,
              dataFilter: res.data
           });
          })
          .catch(err => {
            console.log(err);
          })
      }
      isChangeRoom = (event,data)=>{
        const roomName = event.target.value;
        const dataFil = data.filter(item => {
          if(roomName === "All"){
            return item;
          }
          return roomName === item.locate;
        });
        this.setState({deviceRoom: dataFil});
      }
    render() {
        //console.log(this.state.deviceRoom);
        let listLiquidationTable = this.state.deviceRoom.map((item,index)=>{
            return( 
                <DeviceRoomRow key={index} stt={index + 1}
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
            <label className="lable-title-deviceRoom">THIẾT BỊ TRONG PHONG BAN: </label> <br/>
              <select className="select-name-deviceRoom" name="deviceRoom" onChange={(event) => this.isChangeRoom(event,this.state.dataFilter)} required>
                <option value={"All"}>All</option>
                <option value={"kho"}>Kho</option>
                <option value={"kế toán"}>Kế toán</option>
                <option value={"giám đốc"}>Giám đốc</option>
                
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

export default DeviceRoomTable;
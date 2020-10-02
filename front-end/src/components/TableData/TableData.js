import React, { Component } from 'react';
import './TableData.css'
import TableDataRow from './TableDataRow/TableDataRow'
class TableData extends Component {
    render() {
        let listTable = this.props.tableData.map((item,index)=>{
            console.log(item._id)
            return( 
                <TableDataRow key={index} stt={index + 1}
                    id={item._id.slice(3, item._id.length)}
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
                    edit={()=>this.props.edit(item)} 
                    delete={()=>this.props.delete(item._id, item.name)}/>
            )
        })
        return (
             <div>
        <div className="app_container">
          <table className="TableData">
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
                <th>Barcode</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                
              {listTable}
              
            </tbody>
          </table>
        </div>
      </div>
        );
    }
}

export default TableData;
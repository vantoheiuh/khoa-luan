import React, { Component } from 'react';
import './TableDataRow.css'
import Barcode from '../../UI/Barcode/Barcode';

class TableDataRow extends Component {
  
    render() {
        return (
           
            <tr>
            <td>{this.props.stt}</td>
            <td>{this.props.name}</td>
            <td>{this.props.price}$</td>
            <td>{this.props.amount}</td>
            <td>{this.props.checkinTime}</td>
            <td>{this.props.activeTime}</td>
            <td>{this.props.expiredTime}</td>
            <td>{this.props.quantity}</td>
            <td>{this.props.source}</td>
            <td>{this.props.locate}</td>
            <td><Barcode value={this.props.id}/></td>
            <td>
              <span className={this.props.statusDevice === 'Using' ? "using": "isMaintained"}>
                 {this.props.statusDevice}
              </span>
             
            </td>
            
            <td>
              <button className="edit" onClick={this.props.edit}>Edit</button>
              <button className="delete"  onClick={this.props.delete}>Delete</button>
            </td>
          </tr> 
        
        );
    }
}

export default TableDataRow;
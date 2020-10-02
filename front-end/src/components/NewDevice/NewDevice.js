import React, { Component } from 'react';
import './NewDevice.css';
import axios from 'axios';
import AlertAddNew from '../UI/AlertInfo/AlerAddNew/AlertAddNew';
import Spinner from '../UI/Spinner/Spinner';

class NewDevice extends Component {
    state = {
        name: "",
        price: "",
        amount: "",
        checkinTime: "",
        expiredTime: "",
        activeTime: "",
        quantity: "",
        statusDevice: 'Using',
        source: "",
        locate: "kho",
        alertShowAdd: false,
        status: "",
        checkAlertAdd: true,
        loading: false
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

    }
    add = (event) => {
        this.setState({ loading: true });
        event.preventDefault();
        const post = {
            name: this.state.name,
            price: this.state.price,
            amount: this.state.amount,
            checkinTime: this.state.checkinTime,
            expiredTime: this.state.expiredTime,
            activeTime: this.state.activeTime,
            quantity: this.state.quantity,
            source: this.state.source,
            statusDevice: this.state.statusDevice,
            locate: this.state.locate,
        };
        axios.post("/api/products", post)
            .then(res => {
                console.log(res.data);
                this.alertOnAdd("Thêm mới thành công");
                this.setState({
                    name: "",
                    price: "",
                    amount: "",
                    checkinTime: "",
                    activeTime: "",
                    expiredTime: "",
                    quantity: "",
                    source: "",
                    statusDevice: 'Using',
                    locate: 'Using',
                    loading: false
                });
            })
            .catch(err => {
                this.setState({ checkAlertAdd: false, loading: false });
                this.alertOnAdd("Có lỗi của hệ thống");
            })
    }
    alertOnAdd = (alert) => {
        this.setState({
            alertShowAdd: true,
            status: alert
        });
    }
    alertOffAdd = () => {
        this.setState({
            alertShowAdd: false
        });
    }
    render() {

        return (
            <div>
                <AlertAddNew checkAlertAdd={this.state.checkAlertAdd} alertShowAdd={this.state.alertShowAdd} alertOffAdd={this.alertOffAdd} status={this.state.status} />

                {this.state.loading ? <Spinner /> : <div className="add_form">
                    <h3 className="add_form_title">ADD DEVICE</h3>
                    <form className="add-form-input">
                        <label className="lableDevice">Name: </label>
                        <input className="add-form-input-item" type="text" placeholder="Device name"
                            name="name" onChange={(event) => this.isChange(event)}
                            value={this.state.name} /><br />

                        <label className="lableDevice">Price: </label>
                        <input className="add-form-input-item" type="text" placeholder="Device cost"
                            name="price" onChange={(event) => this.isChange(event)}
                            value={this.state.price} />
                        <label className="lableDevice">Amount: </label>
                        <input className="add-form-input-item" type="number" placeholder="Device amount"
                            name="amount" onChange={(event) => this.isChange(event)}
                            value={this.state.amount} />

                        <label className="lableDevice">checkin Time: </label>
                        <input className="add-form-input-item" type="date" placeholder="Device checkinTime"
                            name="checkinTime" onChange={(event) => this.isChange(event)}
                            value={this.state.checkinTime} />

                        <label className="lableDevice">Active Time: </label>
                        <input className="add-form-input-item" type="number" placeholder="Device activeTime"
                            name="activeTime" onChange={(event) => this.isChange(event)}
                            value={this.state.activeTime} />

                        <label className="lableDevice">expired Time: </label>
                        <input className="add-form-input-item" type="number" placeholder="Device expiredTime"
                            name="expiredTime" onChange={(event) => this.isChange(event)}
                            value={this.state.expiredTime} />


                        <label className="lableDevice">Quantity: </label>
                        <input className="add-form-input-item" type="number" placeholder="Device quantity"
                            name="quantity" onChange={(event) => this.isChange(event)}
                            value={this.state.quantity} />
                        <label className="lableDevice">Quantity: </label>
                        <select className="selectBox" name="statusDevice" onChange={(event) => this.isChange(event)} required>
                            <option value={'Using'}>Using </option>
                            <option value={'Maintained'}>Maintained</option>
                        </select>
                        <label className="lableDevice">Source: </label>
                        <input className="add-form-input-item" type="text" placeholder="Device source"
                            name="source" onChange={(event) => this.isChange(event)}
                            value={this.state.source} />
                        <label className="lableDevice">: </label>
                        <select className="selectBox" name="locate" onChange={(event) => this.isChange(event)} required>
                            <option value={'kho'}>kho </option>

                            <option value={'kế toán'}>kế toán </option>
                            <option value={'giám đốc'}>giám đốc</option>
                        </select>

                        <div className="button-group">
                            <button className="cancer" >CANCER</button>
                            <input type="reset"
                                onClick={(event) => this.add(event)} className="button add" value="ADD" />
                        </div>
                    </form>
                </div>}
            </div>
        );
    }
}

export default NewDevice;
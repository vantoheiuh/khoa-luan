import React, { Component } from 'react';
import '../App.css'
import TableData from '../components/TableData/TableData';
import axios from 'axios';
import Model from '../components/UI/Model/Model';
import Search from '../components/Search/Search';
import AlertInfo from '../components/UI/AlertInfo/AlertInfo';
import Spinner from '../components/UI/Spinner/Spinner';


class DeviceManager extends Component {
  state = {
    tableData: [],
    edit: false,
    searchText: '',
    searchnew: false,

    editUserObject: {},

    alertShow: false,
    status: '',
    checkAlert: true,
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('/api/products')
      .then(res => {
        //console.log(res.data)
        this.setState({
          tableData: res.data,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false});
        console.log(err);
      })
  }

  edit = (user) => {
    this.setState({
      edit: true,
      editUserObject: user
    });
  }

  removeEdit = () => {
    this.setState({
      edit: false
    })
    this.componentDidMount();
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl,
    })
  }
  delete = (id, name) => {
    //console.log(id);
    axios
      .delete("/api/products/" + id)
      .then(response => {
        //console.log(response)
        this.alertOn("Xóa thành công " + name)
        this.componentDidMount();
      })
      .catch(err => {
        this.alertOn("Có lỗi của hệ thống ");
        this.setState({ checkAlert: false });
      })
  }
  check = () => {
    if (this.state.searchnew) {
      this.setState({
        searchnew: false
      })
    }
  }
  check2 = () => {
    if (this.state.searchnew === false) {
      this.setState({
        searchnew: true
      })
    }
  }
  alertOn = (alert) => {
    this.setState({
      alertShow: true,
      status: alert
    });
  }
  alertOff = () => {
    this.setState({
      alertShow: false
    });
  }
  render() {
    let keyword = this.state.searchText;
    let ketqua = []
    this.state.tableData.forEach((item) => {
      if (item.name.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1) {
        ketqua.push(item);
      }
    })
    // console.log(this.state.searchnew);
    //console.log(this.state.editUserObject);
    return (
     <div>
    
          <Search checkConnectProps={(dl) => this.getTextSearch(dl)}
            check={this.check} check2={this.check2} />
       
        {this.state.loading ? <Spinner /> : <TableData tableData={this.state.searchnew ? ketqua : this.state.tableData}
          edit={this.edit} delete={this.delete} />}
        {this.state.edit ? <Model removeEdit={this.removeEdit}
          show={this.state.edit} editUserObject={this.state.editUserObject}
          hiddenModel={this.removeEdit}
          cancel={this.removeEdit}
          alertOn={this.alertOn}
        /> : null}

        <AlertInfo checkAlert={this.state.checkAlert} alertShow={this.state.alertShow} alertOff={this.alertOff} status={this.state.status} />
      
      </div>
    );
  }
}

export default DeviceManager;
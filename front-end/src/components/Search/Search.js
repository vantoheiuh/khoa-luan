import React, { Component } from 'react';
import './Search.css'
class Search extends Component {
    state = {
        tempValue: ''
    }
    search = (event) =>{
        //console.log(event.target.value)
        this.setState({
            tempValue:event.target.value
        })
        console.log(event.target.value.length);
        this.props.checkConnectProps(this.state.tempValue)
            if(event.target.value.length === 0)
            {
            this.props.check()
            }
            if(event.target.value.length > 0)
            {
                this.props.check2()
            }
    }
    render() {
        return (
            <div className="search">
                <input onChange={ (event) => this.search(event)} className="search-input" type="text" placeholder="Search By Name" />
                <button className="header-search-btn"><i className="header-search-btn-icon fas fa-search "></i></button>
            </div>
        );
    }
}

export default Search;
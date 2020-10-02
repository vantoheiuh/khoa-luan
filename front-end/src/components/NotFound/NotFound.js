import React, { Component } from 'react';
import './NotFound.css'
class NotFound extends Component {
    render() {
        return (
            <div className="notfound">
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet" />
                <div className="mainbox">
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin" />
                <div className="err2">4</div>
                <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="/">home</a> and try from there.</p></div>
                </div>
             </div>
        );
    }
}

export default NotFound;
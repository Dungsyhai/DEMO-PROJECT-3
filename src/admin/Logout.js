import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div className='Register_page'>
                <h1>You have logged out!</h1>
                <Link to ="/login">Login again</Link>
            </div>
        )
    }
}

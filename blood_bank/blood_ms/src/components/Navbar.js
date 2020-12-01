import React, { Component } from 'react'
import {Link, withRouter } from 'react-router-dom';

 class Navbar extends Component {

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken');
        this.props.history.push('/')
    }

    render() {

        const loginRegLink = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/new-donation" className="nav-link">
                        New Donation
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/doner-request" className="nav-link">
                        Donor Request
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/patient" className="nav-link">
                        Add Patient
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/map" className="nav-link">
                        Donor Location
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/report" className="nav-link">
                        Report
                    </Link>
                </li>
                <li>
                    <a onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )
            
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {localStorage.usertoken ? userLink: loginRegLink}
                </div>
            </nav>
            
        )

    }
}

export default withRouter(Navbar);
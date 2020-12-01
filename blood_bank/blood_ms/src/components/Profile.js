import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';


export default class Profile extends Component {

    constructor(){
        super();
        this.state ={
            full_name: '',
            nic_number: '',
            email: ''
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken;
        const decode = jwt_decode(token);
        this.setState({
            full_name: decode.full_name,
            nic_number: decode.nic_number,
            email: decode.email
        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5"> 
                    <div className="col-sm-8 mx-auto" align="center" >
                        <h1 className="text-center">Profile</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">      
                                <tr>
                                    <td>Full Name</td>
                                    <td>{this.state.full_name}</td>
                                </tr>
                                <tr>
                                    <td>NIC Number</td>
                                    <td>{this.state.nic_number}</td>
                                </tr>
                                <tr>
                                    <td>Eamil</td>
                                    <td>{this.state.email}</td>
                                </tr>
                    
                    </table>
                   
                </div>
            </div>
        )
    }
}


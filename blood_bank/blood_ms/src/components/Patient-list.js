import React, { Component } from "react";
import axios from 'axios';
import PatientTableRow from './PatientTableRow';


export default class PatientList extends Component {

  constructor(props) {
    super(props)
    this.state = {
        patients: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/patient/')
      .then(res => {
        this.setState({
            patients: res.data
            
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.patients.map((res, i) => {
      return <PatientTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper" style={{marginTop:"80px"}}>
      <h1 align="center">Patient Report</h1>
      <table className="table table-striped table-dark mt-3" >
        <thead>
          <tr>
            <th>Pat_id</th>
            <th>Name</th>
            <th>Nic Number</th>
            <th>Sex</th>
            <th>Birth Day</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Email</th>
            <th>Blood Group</th>
            <th>Blood Qty</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
    </div>);
  }
}
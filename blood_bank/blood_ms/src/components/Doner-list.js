import React, { Component } from "react";
import axios from 'axios';
import DonerTableRow from './DonerTableRow';


export default class DonerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      doners: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/doner/')
      .then(res => {
        this.setState({
          doners: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.doners.map((res, i) => {
      return <DonerTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper" style={{marginTop:"80px"}}>
    <h1 align="center">Donor Report</h1>
      <table className="table table-striped table-dark mt-3" >
        <thead>
          <tr>
            <th>Donor ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Nic Number</th>
            <th>Blood Group</th>
            <th>Donor Age</th>
            <th>Donor Sex</th>
            <th>phone Number</th>
            <th>Address</th>
            <th>Last Doneted Date</th>
            <th>Donete Place</th>
            <th>Tested Diseases</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
    </div>);
  }
}
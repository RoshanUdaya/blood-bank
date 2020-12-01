import React, { Component } from "react";
import axios from 'axios';
import DonerRequstTableRow from './DonerRequstTableRow';


export default class DonerRequest extends Component {

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
      return <DonerRequstTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper" style={{marginTop:"80px"}}>
    <h1 align="center">Valid Doner Request</h1>
    <form style={{ paddingTop: "50px", marginBottom:"30px"}} noValidate onSubmit={this.onSubmit} method="post">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <div className="form-group">
                <select className="form-control" name="group" onChange={this.onChange}>
                  <option hidden>Blood Group</option>
                  <option name="group" value="All">All</option>
                  <option name="group" value="A-">A-</option>
                  <option name="group" value="A+">A+</option>
                  <option name="group" value="B-">B-</option>
                  <option name="group" value="B+">B+</option>
                  <option name="group" value="AB-">AB-</option>
                  <option name="group" value="AB+">AB+</option>
                  <option name="group" value="O-">O-</option>
                  <option name="group" value="O+">O+</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input type="text" className="form-control" id="location" name="location" placeholder="Location"
                  value={this.state.location} onChange={this.onChange} />
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-block" type="submit"> Search</button>
            </div>
        </div>
        </form>
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
            <th>Send Message</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
    </div>);
  }
}
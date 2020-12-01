import React, { Component } from "react";
import axios from 'axios';
import BloodStockTableRow from './BloodStockTableRow';


export default class BloodStockList extends Component {

  constructor(props) {
    super(props)
    this.state = {
        stocks: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/stock/')
      .then(res => {
        this.setState({
            stocks: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.stocks.map((res, i) => {
      return <BloodStockTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper" style={{marginTop:"80px"}}>
    <h1 align="center">Blood Stock Report</h1>
      <table className="table table-striped table-dark mt-3" >
        <thead>
          <tr>
            <th>Stock ID</th>
            <th>Hospital Name</th>
            <th>Blood group</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
    </div>);
  }
}
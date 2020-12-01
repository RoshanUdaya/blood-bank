import React, { Component } from 'react'
import {Link,} from 'react-router-dom';

export default class NewDonation extends Component {
    constructor(props) {
        super(props)
        this.state = {
          doners: [],
        };
    
            this.onChange = this.onChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
      }
    
      onChange(e){
        this.setState({[e.target.name]: e.target.value})
        
    }
    
    onSubmit(e){
        e.preventDefault()
    
        const data ={
          donated_place : this.state.donated_place,
          donated_date : this.state.donated_date
        }
    
    
    }
    render() {
        return (
            <div className="container mt-5">
                <h1 align="center"  style={{paddingTop:"30px"}}>New Donation</h1>
                    <form style={{ paddingTop: "50px", marginBottom:"30px"}} noValidate onSubmit={this.onSubmit} method="post">
                    <div className="row">
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Donor ID</label>
                            <input type="text" className="form-control" id="donor_id" name="donor_id" placeholder="Donor ID"
                            value={this.state.donor_id} onChange={this.onChange} />
                        </div>
                        </div>
                        <div className="col-md-2">
                        <div className="form-group">
                            <label>Barcode</label>
                            <input type="text" className="form-control" id="barcode" name="barcode" placeholder="Barcode"
                            value={this.state.barcode} onChange={this.onChange} />
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="form-group">
                            <label>Donate date</label>
                            <input type="date" className="form-control" id="donated_date"  name="donated_date" placeholder="Donate date"
                            value={this.state.donated_date} onChange={this.onChange} />
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="form-group">
                        <label>Donate Place</label>
                            <input type="text" className="form-control" id="donated_place" name="donated_place" placeholder="Donate Place"
                            value={this.state.donated_place} onChange={this.onChange} />
                        </div>
                        </div>
                        <div className="col-md-2">
                        <label>Checkout</label>
                        <Link to="/oppointment"><button className="btn btn-primary btn-block" type="submit">Checkout </button></Link>
                        </div>
                    </div>
                    </form>
                    <div className="row">

                    </div>
            </div>
        )
    }
}

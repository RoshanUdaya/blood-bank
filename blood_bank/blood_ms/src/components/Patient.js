import React, { Component } from 'react';
import axios from 'axios';

export default class Patient extends Component {

    constructor(){
        super();
        this.state ={
            pat_id: '',
            pat_name: '',
            pat_nic: '',
            pat_email: '',
            pat_mobile: '',
            pat_address: '',
            pat_bldgroup:'',
            pat_qty:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        
        alert(this.state.pat_name);
        const patientObject ={
            pat_id: this.state.pat_id,
            pat_name: this.state.pat_name,
            pat_nic: this.state.pat_nic,
            pat_email: this.state.pat_email,
            pat_mobile: this.state.pat_mobile,
            pat_address: this.state.pat_address,
            pat_bldgroup:this.state.pat_bldgroup,
            pat_qty:this.state.pat_qty
        };

        axios.post('http://localhost:4000/patient/add', patientObject)
                .then(res =>console.log(res.data));

        this.setState({
            pat_id: '',
            pat_name: '',
            pat_nic: '',
            pat_email: '',
            pat_mobile: '',
            pat_address: '',
            pat_bldgroup:'',
            pat_qty:''
        });
    }

    render() {
        return (
            <div className="container">
                <br/>
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit} method="post">
                                    <h3 align="center">Patients Enroll form</h3>
                                    <div className="form-group">
                                        <label htmlFor="pat_id">Patient ID</label>
                                        <input type="text" className="form-control" id="pat_id" name="pat_id" placeholder="Enter Patient ID"
                                                value={this.state.pat_id} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pat_name"> Full Name</label>
                                        <input type="text" className="form-control" id="pat_name" name="pat_name" placeholder="Enter Full Name"
                                                value={this.state.pat_name} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pat_nic"> NIC Number</label>
                                        <input type="text" className="form-control" id="pat_nic" name="pat_nic" placeholder="Enter NIC Number"
                                                value={this.state.pat_nic} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pat_email"> Email address</label>
                                        <input type="email" className="form-control" id="pat_email" name="pat_email" placeholder="Enter Email"
                                                value={this.state.pat_email} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pat_mobile"> Mobile Number</label>
                                        <input type="text" className="form-control" id="pat_mobile" name="pat_mobile" placeholder="Enter Mobile Number Name"
                                                value={this.state.pat_mobile} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="pat_address">Address</label>
                                        <input type="pat_address" className="form-control" id="pat_address" name="pat_address" placeholder="Enter Address"
                                                value={this.state.pat_address} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="pat_qty">Blood Group</label>
                                        <select className="form-control" name="pat_bldgroup" value={this.state.pat_bldgroup} onChange={this.onChange}>
                                        <option hidden>Blood Group</option>
                                        <option name="pat_bldgroup" value="A-">A-</option>
                                        <option name="pat_bldgroup" value="A+">A+</option>
                                        <option name="pat_bldgroup" value="B-">B-</option>
                                        <option name="pat_bldgroup" value="B+">B+</option>
                                        <option name="pat_bldgroup" value="AB-">AB-</option>
                                        <option name="pat_bldgroup" value="AB+">AB+</option>
                                        <option name="pat_bldgroup" value="O-">O-</option>
                                        <option name="pat_bldgroup" value="O+">O+</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pat_qty">Blood QTY</label>
                                        <input type="pat_qty" className="form-control" id="pat_qty" name="pat_qty" placeholder="Enter QTY"
                                                value={this.state.pat_qty} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block" type="submit"> Add Patient</button>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}

import React, { Component } from 'react';

export default class BloodStock extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit} method="post">
                                    <h3 align="center">Users Enroll form</h3>
                                    <div className="form-group">
                                        <label htmlFor="full_name"> Full Name</label>
                                        <input type="text" className="form-control" id="full_name" name="full_name" placeholder="Enter Full Name"
                                                value={this.state.full_name} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_id"> User ID</label>
                                        <input type="text" className="form-control" id="user_id" name="user_id" placeholder="Enter User ID"
                                                value={this.state.user_id} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="role"> Role</label>
                                        <select className="form-control" id="role" name="role" onChange={this.onChange}>
                                            <option  hidden>Select Role</option>
                                            <option name="role" value="Doctor">Doctor</option>
                                            <option name="role" value="Nurse">Nurse</option>
                                            <option name="role" value="Admin">Admin</option>
                                        </select>
                                        <small></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nic_number"> NIC Number</label>
                                        <input type="text" className="form-control" id="nic_number" name="nic_number" placeholder="Enter NIC Number"
                                                value={this.state.nic_number} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email"> Email Address</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email"
                                                value={this.state.email} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hospital_name"> Hospital</label>
                                        <input type="text" className="form-control" id="hospital_name" name="hospital_name" placeholder="Enter Hospital Name"
                                                value={this.state.hospital_name} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password"
                                                value={this.state.password} onChange={this.onChange} />
                                                <small></small>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block" type="submit"> Register</button>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}

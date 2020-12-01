import React, { Component } from 'react';
import {register} from './UserFunction';
import Validator from 'validator';


export default class Register extends Component {

    constructor(){
        super();
        this.state ={
            full_name: '',
            user_id: '',
            nic_number: '',
            email: '',
            hospital_name: '',
            role: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        
        
        const user ={
            full_name: this.state.full_name,
            user_id: this.state.user_id,
            nic_number: this.state.nic_number,
            email: this.state.email,
            hospital_name: this.state.hospital_name,
            role: this.state.role,
            password: this.state.password
        }

        const full_nameValue = user.full_name.trim();
        const usernameValue = user.user_id.trim();
        const passwordValue = user.password.trim();
        const nicValue = user.nic_number.trim();
        const hospitalValue = user.hospital_name.trim();
        const roleValue = user.role.trim();
        const emailValue = user.email.trim();

        function setErrorFor(input, message) {
            const formGroup = input.parentElement;
            const small = formGroup.querySelector('small');
            formGroup.className = 'form-group error';
            small.innerText = message;
            return false;
            
        }
        
        function setSuccessFor(input) {
            const formGroup = input.parentElement;
            formGroup.className = 'form-group success';
        }

        const user_id = document.getElementById('user_id');
        const password = document.getElementById('password');
        const hospital_name = document.getElementById('hospital_name');
        const role = document.getElementById('role');
        const email = document.getElementById('email');
        const nic_number = document.getElementById('nic_number');
        const full_name = document.getElementById('full_name');

         if (full_nameValue === '') {
            setErrorFor(full_name, "Full name cannot be blank")
        }
        else{
            setSuccessFor(full_name);
        }
         if (usernameValue === '') {
            setErrorFor(user_id, "User Id cannot be blank"); 
        }
        else{
            setSuccessFor(user_id);
        }
        if (nicValue === '') {
            setErrorFor(nic_number, "NIC Number cannot be blank")
        }
        else{
            setSuccessFor(nic_number);
        }
        if (emailValue === '') {
            setErrorFor(email, "Eamil cannot be blank")
        }
        else if (!Validator.isEmail(user.email)) {
            setErrorFor(email, "Invalid Email");
        }
        else{
            setSuccessFor(email);
        }
        if (hospitalValue === '') {
            setErrorFor(hospital_name, "Hospital Name cannot be blank")
        }
        else{
            setSuccessFor(hospital_name);
        }
        if (roleValue === '') {
            setErrorFor(role, "Role cannot be blank")
        }
        else{
            setSuccessFor(role);
        }
        if (passwordValue === '') {
            setErrorFor(password, "Password cannot be blank")
        }
        else{
            setSuccessFor(password);
        }
            register(user).then(res =>{
                if(res){
                    this.props.history.push(`/login`);
                }
                
            })
    }

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



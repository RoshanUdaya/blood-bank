import React, { Component } from 'react';
import {login} from './UserFunction';
import { object } from 'prop-types';


export default class Login extends Component {
    


    constructor(){
        super();
        this.state ={
            user_id: '',
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
            user_id: this.state.user_id,
            password: this.state.password
        }
        
        const usernameValue = user.user_id.trim();
        const passwordValue = user.password.trim();

        function setErrorFor(input, message) {
            const formGroup = input.parentElement;
            const small = formGroup.querySelector('small');
            formGroup.className = 'form-group error';
            small.innerText = message;
            
        }
        
        function setSuccessFor(input) {
            const formGroup = input.parentElement;
            formGroup.className = 'form-group success';
        }
        const user_id = document.getElementById('user_id');
        const password = document.getElementById('password');
         if (usernameValue === '') {
            setErrorFor(user_id, "Username cannot be blank")
        }
        else{
            setSuccessFor(user_id);
        }
         if (passwordValue === '') {
            setErrorFor(password, "Password cannot be blank"); 
        }
        else{
            setSuccessFor(password);
        }
        {
            login(user).then(res =>{
                alert(res)
                if(res){
                     this.props.history.push(`/profile`);
                    
                }  
                
            })
            .catch(err=>{
                    alert(err);
            })

        }
        
            
            
        
        //alert(errors);

       
        
    }

    

    render() {
        return (
            <div className="container">
                <br/>
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                    <h3 align="center">Login</h3>
                                    <div className="form-group">
                                        <label htmlFor="user_id"> User Name</label>
                                        <input type="text" className="form-control" id="user_id" name="user_id" placeholder="Enter User Name"
                                                value={this.state.user_id} onChange={this.onChange} />
                                                <small ></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password"> Password</label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password"
                                                value={this.state.password} onChange={this.onChange} />
                                                 <small></small>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block"> Sign In</button>
                               
                            </form>
                        </div>

                    </div>
                
            </div>
        )
    }
}



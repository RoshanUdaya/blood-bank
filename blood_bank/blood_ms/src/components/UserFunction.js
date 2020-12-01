import axios from 'axios';

export const register = newUser =>{
    return axios
        .post('http://localhost:4000/user/register', {
            full_name: newUser.full_name,
            user_id: newUser.user_id,
            nic_number: newUser.nic_number,
            email: newUser.email,
            hospital_name: newUser.hospital_name,
            role: newUser.role,
            password: newUser.password
        })
        .then(res =>{
            
            // window.alert("Registered");
        })
}

export const login = user =>{
    return axios 
        .post('http://localhost:4000/user/login', {
            user_id: user.user_id,
            password: user.password
            
        })
        .then(res =>{
            localStorage.setItem('usertoken',res.data)
            return res.data;
        })
        .catch(err=>{
            alert(err);
        })
}
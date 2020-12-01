import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import DonersReport from './components/DonersReport'
import DonersMap from './components/DonersMap'
import DonersList from './components/Doner-list'
import Report from './components/Report'
import BloodStockList from './components/BloodStock-list'
import BloodStock from './components/BloodStock'
import PatientList from './components/Patient-list'
import Patient from './components/Patient'
import DonerRequest from './components/DonerRequest'
import NewDonation from './components/NewDonation'

export default class App extends Component {
  render(){
    return (
      <Router>
         <div className="App">
             <Navbar/>
             <Route exact path="/" component={Landing} />
             <div className="container">
                 <Route exact path="/register" component={Register} />
                 <Route exact path="/login" component={Login} />
                 <Route exact path="/profile" component={Profile} />
                 <Route exact path="/oppointment"  component={DonersReport}/>
                 <Route exact path="/map" component={DonersMap}/>
                 <Route exact path="/doner-list" component={DonersList}/>
                 <Route exact path="/doner-request" component={DonerRequest}/>
                 <Route exact path="/new-donation" component={NewDonation}/>
                 <Route exact path="/report" component={Report}/>
                 <Route exact path="/blood-stock" component={BloodStock}/>
                 <Route exact path="/blood-stock-list" component={BloodStockList}/>
                 <Route exact path="/patient" component={Patient}/>
                 <Route exact path="/patient-list" component={PatientList}/>
             </div>
         </div>
      </Router>
     );
  }
 
}



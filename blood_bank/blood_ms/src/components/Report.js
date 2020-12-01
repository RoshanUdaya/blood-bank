import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Landing extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row mt-5" > 
                    <div className="col-sm-12 mx-auto" align="center" >
                        <h1 style={{marginTop:"30px"}}>Report</h1>
                    </div>
                    <br/>
                    <div className="col-sm-4 mx-auto" align="center" id="report" >
                    <Link to="/doner-list"> Donor Report</Link>
                    </div>
                    <div className="col-sm-4 mx-auto" align="center" id="report" >
                    <Link to="/patient-list"> Patient Report</Link>
                    </div>
                    <div className="col-sm-4 mx-auto" align="center" id="report" >
                    <Link to="/blood-stock-list"> Blood Stock Report</Link>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
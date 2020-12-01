import React, {Component} from "react";
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: 'faed17cd',
    apiSecret: 'N2UvcufbZ2nzlUOI',
});

const from = 'Vonage APIs';
const to = '94715960983';
const text = 'request D+ blood';

nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
export default class Create extends Component{
  render(){
      return(
          <div style={{marginTop: 10}}>
              <h3>Request Blood from Previous Donors</h3>
              <form>
                  <div className="form-group">
                      <label>Select Blood Group</label>
                      <input type="text" className="form-control"/>
                  </div>
                  <div className="form-group">
                      <label>Select Location</label>
                      <input type="text" className="form-control"/>
                  </div>

                  <div className="form-group">

                      <input type="submit" value="Send Message" className="btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}
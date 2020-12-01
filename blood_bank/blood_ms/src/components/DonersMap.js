import React, { Component } from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import axios from 'axios';
import { compose } from "recompose"

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 5.938594, lng: 80.575458 }}>
      {props.doners.map(marker => {
        const onClick = props.onClick.bind(this, marker)
        
        if(marker.donor_bldgroup == props.selectGroup){
          return ( 
            
            <Marker
              // key={marker.id}
              onClick={onClick}
              position={{ lat: marker.donor_coordinates[0], lng: marker.donor_coordinates[1] }}
            >
              {props.selectedMarker === marker &&
                <InfoWindow>
                  <div className="map-details">
                    name : { marker.donor_name  } <br/>
                    Blood Group : {marker.donor_bldgroup}<br/>
                    Phone Number : {marker.donor_mobile}<br/>
                  </div>
                </InfoWindow>}
              
            </Marker>
          )
        }
        
          })}
    </GoogleMap>
  )
})

export default class DonersMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      doners: [],
      selectedMarker: false,
      location : '',
      group: ''
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
      location : this.state.location,
      group : this.state.group
    }

    window.location.reload(false);

}

  handleClick = (marker, event) => {
    // console.log({ marker })
    this.setState({ selectedMarker: marker })
  }

  componentDidMount() {
    axios.get('http://localhost:4000/doner/')
      .then(res => {
        this.setState({
          doners: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="container mt-5">
      <h1 align="center"  style={{paddingTop:"30px"}}>Valid Donor Location</h1>
        <form style={{ paddingTop: "50px", marginBottom:"30px"}} noValidate onSubmit={this.onSubmit} method="post">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <div className="form-group">
                <select className="form-control" name="group" onChange={this.onChange}>
                  <option hidden>Blood Group</option>
                  <option name="group" value="All">All</option>
                  <option name="group" value="A-">A-</option>
                  <option name="group" value="A+">A+</option>
                  <option name="group" value="B-">B-</option>
                  <option name="group" value="B+">B+</option>
                  <option name="group" value="AB-">AB-</option>
                  <option name="group" value="AB+">AB+</option>
                  <option name="group" value="O-">O-</option>
                  <option name="group" value="O+">O+</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input type="text" className="form-control" id="location" name="location" placeholder="Location"
                  value={this.state.location} onChange={this.onChange} />
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary btn-block"> Clear Map</button>
            </div>
          

        </div>
        </form>
        <div style={{ width: "100vw", height: "100vh" }} className="container" id="mymap" >
          <MapWithAMarker
            selectGroup = {this.state.group}
            selectedMarker={this.state.selectedMarker}
            doners={this.state.doners}
            onClick={this.handleClick}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD27-xwm_C9mv9V2mb2hki_XfzKTD5TYRg`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            
          />
          
        </div>
        {/* <script>
        var MataraDelimiters =[
          [80.72041321,5.96180487] ,
          [80.72041321,5.96152687],
          [80.7206955,5.96152687 ],
          [80.7206955,5.96124887 ],
          [80.7215271,5.96124887 ],
          [80.7215271,5.96097088 ],
          [80.72208405,5.96097088],
          [80.72208405,5.96069479], 
          [80.72264099,5.96069479], 
          [80.72264099,5.95958281],
          [80.72180176,5.95958281],
          [80.72180176,5.9598608],
          [80.72097015,5.9598608],
          [80.72097015,5.9601388 ],
          [80.72013855,5.9601388 ],
          [80.72013855,5.96041679],
          [80.7195816,5.96041679],
          [80.7195816,5.96069479],
          [80.71930695,5.96069479],
          [80.71930695,5.96152687],
          [80.7195816,5.96152687],
          [80.7195816,5.96180487],
          [80.72041321,5.96180487]
          ];

          var geofence = new Geofence({mapId= 'mymap'});
    
            geofence.draw(coords);
        </script> */}
      </div>
    )
  }
}

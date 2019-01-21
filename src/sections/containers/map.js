import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import API from '../../utils/api';

const mapStyles = {
  width: '600px',
  height: '600px',
  position:'relative',
  left:'-140px'
};

export class MapContainer extends Component {
  
  state = {
    shapeList : []
  }

  UNSAFE_componentWillReceiveProps(nextProps){        
    if(nextProps.numb !== this.props.numb){        
       this.handleCodShowMap(nextProps.numb)
    }
  }

  async handleCodShowMap (numb) {    
    await API.getTrips(numb)
    .then(shapeList => {                   
     this.setState({
      shapeList
     })
    }) 
  }

  render() {   
    return (
      <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: -33.4451920005,
          lng: -70.6455860001
          }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAVeKAMlkdfP5NZQZPUhYD2rTybDJMGLZQ'    
})(MapContainer);
import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import Sidebar from './sections/containers/sidebar';
import MapContainer from './sections/containers/map';
import './App.css';

class App extends Component {

  state = {
    numb:''
  }
  
  handleCodMaps = (numb) => {
    this.setState({
       numb
    })
  }

  render() {
  const { numb } = this.state  
  return (
    <div className="App">      
     <Grid> 
      <Row className="show-grid rowUI">
        <Col md={6}>
          <Sidebar codMaps={this.handleCodMaps}/>
        </Col>
        <Col md={6}>        
          <MapContainer numb={numb}/>        
        </Col>
      </Row>
     </Grid>
     </div>      
   );
  }
}

export default App;

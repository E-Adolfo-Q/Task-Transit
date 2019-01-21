import React, { Component } from 'react';
import { FormGroup,FormControl,Glyphicon } from 'react-bootstrap';

class Search extends Component {
 
  constructor(props){
   super(props)  
   this.state = {
    value : ''
   } 
 }

  handleChange = (e) => {   
    const val = e.target.value     
    this.setState({ value : val });
    this.props.SearchTravel(val)
  }

  render() {
  const { value } = this.state;  
  return (
    <form>
    <FormGroup
      controlId="formBasicText"      
     >     
      <FormControl
        type="text"        
        value={value}        
        placeholder="Search"        
        onChange={this.handleChange}        
      />
      <FormControl.Feedback>         
        <Glyphicon glyph="search" />       
     </FormControl.Feedback>    
    </FormGroup>
    </form>  
  );
 }
}

export default Search;

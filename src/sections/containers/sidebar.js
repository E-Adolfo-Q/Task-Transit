import React, { Component } from 'react';
import Title from '../components/title';
import Search from './search';
import List from './list';
import API from '../../utils/api';
import '../../App.css';

class Sidebar extends Component {
  
 state = {
   numbTravel:'',
   numb:'',
   routeList:[]  
 }

  async componentDidMount(){
   await API.getRoutes()
   .then(routeList => {       
    this.setState({
      routeList
    })
   }) 
 }  

 handleTitleNumbTravel = numb => {
   this.props.codMaps(numb)   
   this.setState({
     numb
   })
 }

 handleSearchTravel = numbTravel => {   
   this.setState({
    numbTravel
   });
 }

 render() {
  const { numbTravel,numb,routeList } = this.state  
  return (
   <div className="containerSidebar">   
     <Title numb={numb}/>
     <Search SearchTravel={this.handleSearchTravel} />
     <List titleNumbTravel={this.handleTitleNumbTravel} numbTravel={numbTravel} routeList={routeList}/>
   </div> 
  );
 }
}

export default Sidebar;

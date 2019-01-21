import React,{ Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import '../../App.css';

class List extends Component  {
  constructor(props){
   super(props) 
   this.state = {
     data : [],
     favorite : [],    
   } 
   this.array = []  
  }

  componentDidMount(){
    const { routeList, numbTravel } = this.props       
    this.handleCodList(routeList)
    this.handleSearchCodList(numbTravel); 
  }
  
  UNSAFE_componentWillReceiveProps(nextProps){        
     if(nextProps.routeList !== this.props.routeList){        
        this.handleCodList(nextProps.routeList)
     }else if(nextProps.numbTravel !== this.props.numbTravel){       
       this.handleSearchCodList(nextProps.numbTravel)
     }     
  }

  handleSelectedItem (item) {    
    const { favorite } = this.state;
    const f = favorite.concat(item);   
    
    this.props.titleNumbTravel(item)

    this.setState({
      favorite:f     
    })
  }
  
  handleCodList = (data) => { 
    this.array = data
    this.setState({
      data      
    }) 
  }
  
  handleSearchCodList = (cod) => {
        
    const newData = this.array.filter((item) => {     
      return item.route_id.indexOf(cod) > -1
    })

    this.setState({
        data:newData         
    })  
  } 

 render(){ 
  const { data, favorite } = this.state 
  return( 
  <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="listCodRoute">
  <Tab eventKey={1} title="Recorridos">
   <div className="menuItem">
   {
    data.map((item,index) => {      
    return(    
      <li key={index}>
        <a onClick={()=>this.handleSelectedItem(item.route_id)}>{item.route_short_name}</a>
      </li>
     )
    })}   
   </div>            
  </Tab>
  <Tab eventKey={2} title="Favoritos">
   <div className="menuItem">
    {
     favorite.map((item) => {
     return(
      <li key={item}>
        <a>{item}</a>
      </li>
     )
   })}
  </div>  
  </Tab> 
  </Tabs>
  )
 }
}

export default List;
const url = 'http://localhost:3001/api';

class Api {  
  async getRoutes() {  
    const api = `${url}/route`  
    return await fetch(api)
    .then((res) => res.json())
    .then(data => data.routes)
    .catch(error => {
      console.log(error)
    })
  }
  
  async getTrips(idroutes){
    const api = `${url}/trips/${idroutes}`;    
    return await fetch(api)
    .then((res) => res.json())
    .then(data => data.trips)
    .catch(error => {
      console.log(error)
    })
  }
}

export default new Api();

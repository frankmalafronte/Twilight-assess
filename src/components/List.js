import React, { Component } from 'react';
import './List.css'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {data:[]  }
  }

  async componentDidMount(){
    const response = await fetch(`https://developer.nps.gov/api/v1/parks?fields=images&api_key=${process.env.API_KEY}`)
    const json = await response.json()
    this.setState({data: json.data})
  }
  render() { 
    return (<div>
      <div className = "Header">
      America's National Parks
      </div>  
    <ul className="List">
      {this.state.data.map(item=>(
        <li className ='Item' key={item.name}
        >
        <img
         src = {item.images[0].url}
         alt = ''
        >
        </img>
        <div className="Info">
        <div className = "Title">
          {item.fullName}
        </div>
        <div className = "description">
         {item.description} 
         </div> 
         </div>
        </li>
      ))}
      </ul>
      </div>
         );
  }
}
 
export default List;
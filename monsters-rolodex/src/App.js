import React, {Component} from "react";
import axios from "axios"

import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters : [],
      searchText: ""
    }
  }
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/users`)
        .then(response => this.setState({monsters:response.data}))
  }

  render() {
    const {monsters, searchText} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchText.toLowerCase()))
    return (

        <div className="App">
          <h1>Monsters Rolodex</h1>
            <h5>server: {process.env.REACT_APP_SERVER_URL}</h5>
          <SearchBox placeholder={"search monsters"} onChange={event =>{this.setState({searchText: event.target.value})}} />
          <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}

export default App;

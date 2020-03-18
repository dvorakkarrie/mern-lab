import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

const backendUrl = "http://localhost:8080/api/users/";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ""
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: backendUrl
    })
    .then(users => console.log(users))
  }

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;

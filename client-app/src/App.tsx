import React, {Component} from "react"
import axios from "axios";
import logo from './logo.svg';
import "./App.css";

class App extends Component {
  state = {
    values: []
  };
  componentDidMount() {    
    axios.get("http://localhost:5000/api/values/").then(response =>this.setState({
      values: response.data      
    }) );
    
    // this.setState({
    //   values: [
    //     { Id: 1, name: "Value 101" },
    //     { Id: 2, name: "Value 102" },
    //     { Id: 3, name: "Value 103" }
    //   ]
    // });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.values.map((value: any) => (
              <li key={value.id}>{value.name}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
export default App;


import './App.css';
import MyFooter from './Components/MyFooter';
import MyNavbar from './Components/MyNavbar';
import Person from './Components/Person';
import {Button} from 'react-bootstrap';


import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggle = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
          
        <Button variant="outline-primary" onClick={this.toggle}>Show Profile</Button>
  
              {this.state.show ? <Person/> : null}
            
        <MyFooter/>
        </div>  
    );
  }
}

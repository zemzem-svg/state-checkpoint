

import React, { Component } from 'react';
import "./App.css";
import Counter from './Counter';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      show: false
    }
  }
    toggle =() =>{
      this.setState({show: !this.state.show})
    }
  render() {
    return (
      <div className="App">
        {this.state.show?(
          <div>
          <img  src='https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/01/web_dev_pillar_page.jpg' alt="rimy"  width="500" height="250" />
        <h1 className="name"> Mabrouka ZEMZEMI</h1>
        <h4 className="bio">I am 30 years old ,i'm from Elhamma
          <br/>
          and i'm studying at GoMyCode. </h4>
          <h4 className="profession"> Future fullstack  Developer.</h4>
        </div>
        ): null}
        
        <button className="btn" onClick={this.toggle}>Click Here</button>
      <Counter/>
      </div>
    )
  };
  }


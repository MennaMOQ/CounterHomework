
import React, { Component } from "react";
import './styles/style.css'
class App extends Component {
    //State
  constructor() {
    super();
    this.state = {
        name:"Menna",
        stateus:true,
        count: 0
    };
    // to build new value / function everytime I click on the button
    this.Plus = this.Plus.bind(this);
    this.Minus = this.Minus.bind(this);
    this.Start = this.Start.bind(this);


  }
  //functions of setstate
  Plus() {
    this.setState(prev => {
      return {
        count: prev.count + 1
      }
    })
  }
  Minus() {
    this.setState(prev => {
      return {
        count: prev.count - 1
      }
    })
  }

  Start() {
    this.setState(prev => {
      return { count: prev.count = 0 }
    })
  }


  render() {
      let logged
      if(this.state.stateus == true){
        logged = "in"
      }else{
          logged="out"
      }
    return (
      <div className="card">
        <h1>you are logged {logged}</h1>
        <button onClick={this.Start} className="btn">rm</button>
        <h1>Hello {this.state.name} = {this.state.count}</h1>
        <button onClick={this.Minus} className="btn">-</button>
        <button className="btn" onClick={this.Plus} >+</button>
      </div>
    );
  }
}

export default App;

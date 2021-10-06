import React from "react";
import Numpad from "./components/Numpad"
import Display from "./components/Display"

class Calculator extends React.Component{
  constructor(){
    super();
    // this.state = {};
  }
  render(){
    return (
    <div>
      <Display />
      <Numpad />
    </div>
    )
  }

}

export default Calculator;
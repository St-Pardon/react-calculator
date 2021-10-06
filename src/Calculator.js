import React from "react";
import Numpad from "./components/Numpad"
import Display from "./components/Display"

class Calculator extends React.Component{
  constructor(){
    super();
    this.state = {
      defaultValue: "0",
      currentValue: "0",
      formula: "",
      result: ""
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleClear = this.handleClear.bind(this)
  }
  handleClear(){
    this.setState({
      defaultValue: "0",
      currentValue: "0"
    });
  }
  handleNumbers(e){
    if(this.state.defaultValue !== "0"){
      this.setState({
        currentValue: e.target.value, 
        defaultValue: this.state.defaultValue +"" + this.state.currentValue
      });
    } else {
      this.setState({
        defaultValue: e.target.value
      })

    }
  }
  handleOperators(e){
    if(this.state.defaultValue === "0" && (e.target.value === "-" || e.target.value === "+")){
      console.log(e.target.value)
      this.setState({
        // currentValue: e.target.value,
        defaultValue: e.target.value
      })
    } else {
      console.log("this is the other " + e.target.value)
      this.setState({
        currentValue: e.target.value,
        defaultValue: this.state.defaultValue + "" + this.state.currentValue
      })
    } 
  }
  
  render(){
    return (
    <div>
      <Display val={this.state.defaultValue}/>
      <Numpad handleClick={this.handleNumbers} handleOperation={this.handleOperators} clear={this.handleClear}/>
    </div>
    )
  }

}

export default Calculator;
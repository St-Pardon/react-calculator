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
    if(this.state.defaultValue === "0"){
      console.log("first num" + e.target.value)
      this.setState({
        // currentValue: e.target.value
        defaultValue: e.target.value 
        // defaultValue: this.state.defaultValue === "0"  ? this.state.currentValue : + this.state.currentValue
      });
      // console.log(this.state.currentValue)
      console.log(this.state.defaultValue)
    } else {
      console.log("second num" + e.target.value)
      this.setState({
        // currentValue: e.target.value, 
        defaultValue: this.state.defaultValue  +  e.target.value
        // defaultValue: this.state.defaultValue  !== "0"  ? this.state.currentValue : this.state.defaultValue + this.state.currentValue
      })
      // console.log(this.state.currentValue)
      console.log(this.state.defaultValue)

    }
  }
  // handleOperators(e){
  //   if(this.state.defaultValue === "0" && (e.target.value === "-" || e.target.value === "+")){
  //     console.log(e.target.value)
  //     this.setState({
  //       // currentValue: e.target.value,
  //       defaultValue: e.target.value
  //     })
  //   } else if(this.state.defaultValue === "-" || e.target.value === "+"){
  //     this.setState({
  //       // currentValue: e.target.value,
  //       defaultValue: e.target.value
  //     })
  //   } else {
  //     console.log("this is the other " + e.target.value)
  //     this.setState({
  //       // currentValue: e.target.value,
  //       defaultValue: this.state.defaultValue + e.target.value
  //     })
  //   } 
  // }
  handleOperators(e){
    if(this.state.defaultValue !== "0"){
      console.log(e.target.value)
      this.setState({
        defaultValue: this.state.defaultValue[this.state.defaultValue.length - 1] === e.target.value ?  this.state.defaultValue : this.state.defaultValue + e.target.value  
      })
      // this.setState({
        //   // currentValue: e.target.value,
        //   defaultValue: e.target.value
        // })
      } else if (this.state.defaultValue === "-" || e.target.value === "+"){
        this.setState({
          // currentValue: e.target.value,
          defaultValue: e.target.value
        })
      } else {
      console.log("this is the other " + e.target.value)
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
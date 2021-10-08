import React from "react";
import Numpad from "./components/Numpad"
import Display from "./components/Display"

let result = "";
console.log(typeof result)
console.log(result)
class Calculator extends React.Component{
  constructor(){
    super();
    this.state = {
      defaultValue: "0",
      currentValue: "0",
      formula: "",
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleEqualsTo = this.handleEqualsTo.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }
  handleClear(){
    this.setState({
      defaultValue: "0",
      currentValue: "0"
    });
    console.log("h")
  }
  handleNumbers(e){
    if(this.state.defaultValue === "0"){
      this.setState({
        defaultValue: e.target.value 
      });
    } else {
      this.setState({
        defaultValue: this.state.defaultValue  +  e.target.value
      })
    }
    // this.handleEqualsTo()
  }

  handleOperators(e){
    if(this.state.defaultValue !== "0" && e.target.value !== "="){
      this.setState({
        defaultValue: this.state.defaultValue[this.state.defaultValue.length - 1] === e.target.value ?  this.state.defaultValue 
        : (this.state.defaultValue[this.state.defaultValue.length - 1] ===  "+" || this.state.defaultValue[this.state.defaultValue.length - 1] === "-") && (e.target.value ===  "/" || e.target.value ===  "*" )? this.state.defaultValue
        : this.state.defaultValue + e.target.value  
      })
      // this.handleEqualsTo()
      } else if (e.target.value === "-" || e.target.value === "+"){
        this.setState({
          defaultValue: e.target.value
        })
      } else if (e.target.value === "="){
        this.handleEqualsTo()
        this.setState({
          defaultValue : this.state.defaultValue[this.state.defaultValue.length - 1] === "=" ? 
          this.state.defaultValue
          : this.state.defaultValue + e.target.value + result
        })
      } 
  }
  // 3+5*6-2/4=32.5or11.5
  
  handleDecimal(e){
    let ini = /[\+\_\*\/]\d+$/.test(this.state.defaultValue);  // checks +23 
    let regex = /(\d+\.\d+)$/g.test(this.state.defaultValue); // checks 12.34
    let des = /\.$/.test(this.state.defaultValue); // match decimal
    let signs = /[\+\_\*\/]$/.test(this.state.defaultValue) // for maths operator
    console.log(ini);
    console.log(regex);
    console.log(des);
    console.log(signs);
    if (this.state.defaultValue !== "0"){
      this.setState({
        defaultValue: ini ? this.state.defaultValue + e.target.value
        : regex ? this.state.defaultValue 
        : des ? this.state.defaultValue  
        : signs ? this.state.defaultValue + "0" + e.target.value
        : this.state.defaultValue + e.target.value

      })
    } else {
      this.setState({
        defaultValue: this.state.defaultValue  + e.target.value
      })
    }
  }
  handleEqualsTo(){
    let ans = /(^\W?\d+)(\W+?\d+)+/.test(this.state.defaultValue)
    let eq = /\=$/.test(this.state.defaultValue)
    if (ans){
      result = eval(this.state.defaultValue)
    }
  }

  render(){
    return (
    <div className="container">
      <Display val = {this.state.defaultValue} result={result}/>

      <Numpad 
        click = {this.handleNumbers} 
        operation = {this.handleOperators} 
        clear = {this.handleClear}
        decimal = {this.handleDecimal}
      />
    </div>
    )
  }

}

export default Calculator;
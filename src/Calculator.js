import React from "react";
import Numpad from "./components/Numpad"
import Display from "./components/Display"

const endsWithOperator = /[x+-/]$/;
class Calculator extends React.Component{
  constructor(){
    super();
    this.state = {
      displayInput: "",
      result: "0",
      displayInput: "",
      lastInput: ""
    };

    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleEqualsTo = this.handleEqualsTo.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }
  handleClear(){
    this.setState({
      prevVal: "0",
      result: "0",
      displayInput: "",
      lastInput: ""
    });
  }
  handleNumbers(e){
    if(this.state.displayInput === "0"){
      this.setState({
        displayInput: e.target.value 
      });
    } else {
      this.setState({
        displayInput: this.state.displayInput  +  e.target.value
      })
    }
  }

  handleOperators(e){
    // if(this.state.displayInput !== "" && e.target.value !== "="){
      if (!endsWithOperator.test(this.state.displayInput)){
        console.log("first")
        console.log(this.state.displayInput)
        this.setState({
          prevVal: this.state.displayInput,
          displayInput: this.state.displayInput + e.target.value
        });
      } else if (!/\d[x/+-]{1}-$/.test(this.state.displayInput)){
        console.log("second")
        this.setState({
          displayInput: (/\d[x/+-]{1}-$/.test(this.state.displayInput + e.target.value) ? this.state.displayInput : this.state.prevVal) + e.target.value
        });        
      } else if (e.target.value !== "-"){
        console.log("third")
        this.setState({
          displayInput: this.state.prevVal + e.target.value
        });
      }
      // this.setState({
      //   displayInput: this.state.displayInput[this.state.displayInput.length - 1] === e.target.value 
      //   ?  this.state.displayInput 
      //     : (this.state.displayInput[this.state.displayInput.length - 1] ===  "+" || this.state.displayInput[this.state.displayInput.length - 1] === "-") && (e.target.value ===  "/" || e.target.value ===  "*" )  
      //     ? this.state.displayInput
      //       : this.state.displayInput + e.target.value  
      // })
      // } 
      // else if (e.target.value === "-" || e.target.value === "+"){
      //   this.setState({
      //     displayInput: e.target.value
      //   })
      // } else if (e.target.value === "="){
      //   this.handleEqualsTo()
    
      // } 
  }
  
  handleDecimal(e){
    let ini = /[\+\_\*\/]\d+$/.test(this.state.displayInput);  // checks +23 
    let regex = /(\d+\.\d+)$/g.test(this.state.displayInput); // checks 12.34
    let des = /\.$/.test(this.state.displayInput); // match decimal
    let signs = /[\+\_\*\/]$/.test(this.state.displayInput) // for maths operator
    if (this.state.displayInput !== ""){
      this.setState({
        displayInput : ini 
        ? this.state.displayInput + e.target.value
          : regex 
          ? this.state.displayInput 
            : des 
            ? this.state.displayInput  
              : signs 
              ? this.state.displayInput + "0" + e.target.value
                : this.state.displayInput + e.target.value

      })
    } else {
      this.setState({
        displayInput: this.state.displayInput  + e.target.value
      })
    }
  }
  handleEqualsTo(){
    let ans = /(^\W?\d+)(\W+?\d+)+/.test(this.state.displayInput)
    let eq = /\=$/.test(this.state.displayInput)
    if (ans){
      this.setState({
        result : eval(this.state.displayInput),
        displayInput : this.state.displayInput[this.state.displayInput.length - 1] === "=" 
        ? this.state.displayInput
        : this.state.displayInput + '=' + this.state.result
      })
    }
  }

  render(){
    return (
    <div className="container">
      <Display val = {this.state.displayInput} result={this.state.result} />

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
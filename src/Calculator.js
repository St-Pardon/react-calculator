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
      lastInput: "",
      evaluated: false
    });
  }
  handleNumbers(e){
    if(this.state.displayInput === ""){
      console.log("zero1")
      this.setState({
        displayInput: e.target.value,
        result: e.target.value
      });
    } else {
      console.log("zero2")
      this.setState({
        displayInput: this.state.displayInput === "0" && e.target.value === "0" ? this.state.displayInput : this.state.displayInput +  e.target.value,
        result: this.state.displayInput === "0" && e.target.value === "0" ? this.state.displayInput : this.state.result +  e.target.value
      })
    }
  }

  handleOperators(e){
    this.setState({result: e.target.value})
    // if(this.state.displayInput !== "" && e.target.value !== "="){
        if(this.state.evaluated){
          this.setState({
            displayInput: this.state.prevVal + e.target.value,
            // result: "0"
          })
        } else if (!endsWithOperator.test(this.state.displayInput)){
          this.setState({
            prevVal: this.state.displayInput,
            displayInput: this.state.displayInput + e.target.value
          });
        } else if (!/\d[x/+-]{1}-$/.test(this.state.displayInput)){
          this.setState({
            displayInput: (/\d[x/+-]{1}-$/.test(this.state.displayInput + e.target.value) ? this.state.displayInput : this.state.prevVal) + e.target.value
          });        
        } else if (e.target.value !== "-"){
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
      //  else if (e.target.value === "="){
      //   this.handleEqualsTo()
    
      // } 
  }
  
  handleDecimal(e){
    let ini = /[\+\-\x\/]\d+$/.test(this.state.displayInput);  // checks +23 
    let regex = /(\d+\.\d+)$/g.test(this.state.displayInput); // checks 12.34
    let des = /\.$/.test(this.state.displayInput); // match decimal
    let signs = /[\+\-\x\/]$/.test(this.state.displayInput) // for maths operator
    if (this.state.displayInput !== ""){
      console.log("first")
      this.setState({
        displayInput : ini 
        ? this.state.displayInput + e.target.value
        : regex 
        ? this.state.displayInput 
            : des 
            ? this.state.displayInput  
              : signs 
              ? this.state.displayInput + "0" + e.target.value
              : this.state.displayInput + e.target.value,
        result: !endsWithOperator.test(this.state.displayInput) ? this.state.result : "0" + e.target.value
        
      })
    } else {
      console.log("second")
      this.setState({
        displayInput: '0'  + e.target.value,
        result: this.state.result  + e.target.value
        
      })
    }
  }
  handleEqualsTo(){
    let cleanData = this.state.displayInput;
    cleanData = cleanData.replace(/x/g, '*')
    let ans = /(^\W?\d+)(\W+?\d+)+/.test(cleanData)
    // let eq = /\=$/.test(this.state.displayInput)
    if (ans){
      console.log("result")
      this.setState({
        result : eval(cleanData),
        displayInput : this.state.displayInput + "=" + eval(cleanData),
        prevVal: eval(cleanData),
        evaluated: true
        // displayInput : this.state.displayInput[this.state.displayInput.length - 1] === "=" 
        // ? this.state.displayInput
        // : this.state.displayInput + '=' + this.state.result
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
        equate = {this.handleEqualsTo}
      />
    </div>
    )
  }

}

export default Calculator;
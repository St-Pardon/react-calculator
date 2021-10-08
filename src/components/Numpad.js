import React from "react"

const Numpad = (props) => {
  return(
    <div className="inner-container">
      <div className="lower">
        <div className="inputs">
          <button id="seven" className="input-button" value="7" onClick={props.click}>7</button>
          <button id="eight" className="input-button" value="8" onClick={props.click}>8</button>
          <button id="nine" className="input-button" value="9" onClick={props.click}>9</button>
          <button id="four" className="input-button" value="4" onClick={props.click}>4</button>
          <button id="five" className="input-button" value="5" onClick={props.click}>5</button>
          <button id="six" className="input-button" value="6" onClick={props.click}>6</button>
          <button id="one" className="input-button" value="1" onClick={props.click}>1</button>
          <button id="two" className="input-button" value="2" onClick={props.click}>2</button>
          <button id="three" className="input-button" value="3" onClick={props.click}> 3</button>
          <button id="zero" className="input-button" value="0" onClick={props.click}>0</button>
          <button id="decimal" className="input-button" value="." onClick ={props.decimal}>.</button>
        </div>
        <div className="operators">
          <button id="divide" className="operator-button" value="/" onClick={props.operation}>&#xF7;</button>
          <button id="multiply" className="operator-button" value="*" onClick={props.operation}>x</button>
          <button id="subtract" className="operator-button" value="-" onClick={props.operation}>-</button>
          <button id="add" className="operator-button" value="+" onClick={props.operation}>+</button>
        </div>
        <div className="controls">
          <button id="clear" className="operator-button" onClick={props.clear}>C</button>
          <button id="equals" className="operator-button" value="=" onClick={props.operation}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Numpad;
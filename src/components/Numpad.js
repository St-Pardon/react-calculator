import React from "react"

const Numpad = (props) => {
  return(
    <div>
      <div>
        <button id="clear" onClick={props.clear}>C</button>
      </div>
      <div>
        <div>
          <button id="seven" value="7" onClick={props.click}>7</button>
          <button id="eight" value="8" onClick={props.click}>8</button>
          <button id="nine" value="9" onClick={props.click}>9</button>
          <button id="four" value="4" onClick={props.click}>4</button>
          <button id="five" value="5" onClick={props.click}>5</button>
          <button id="six" value="6" onClick={props.click}>6</button>
          <button id="one" value="1" onClick={props.click}>1</button>
          <button id="two" value="2" onClick={props.click}>2</button>
          <button id="three" value="3" onClick={props.click}> 3</button>
          <button id="zero" value="0" onClick={props.click}>0</button>
          <button id="decimal" value="." onClick ={props.decimal}>.</button>
        </div>
        <div>
          <button id="divide" value="/" onClick={props.operation}>/</button>
          <button id="multiply" value="*" onClick={props.operation}>x</button>
          <button id="subtract" value="-" onClick={props.operation}>-</button>
          <button id="add" value="+" onClick={props.operation}>+</button>
          <button id="equals" value="=" onClick={props.operation}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Numpad;
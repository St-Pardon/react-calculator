import React from "react"

const Numpad = (props) => {
  return(
    <div>
      <div>
        <button id="clear" onClick={props.clear}>C</button>
      </div>
      <div>
        <div>
          <button id="seven" value="7" onClick={props.handleClick}>7</button>
          <button id="eight" value="8" onClick={props.handleClick}>8</button>
          <button id="nine" value="9" onClick={props.handleClick}>9</button>
          <button id="four" value="4" onClick={props.handleClick}>4</button>
          <button id="five" value="5" onClick={props.handleClick}>5</button>
          <button id="six" value="6" onClick={props.handleClick}>6</button>
          <button id="one" value="1" onClick={props.handleClick}>1</button>
          <button id="two" value="2" onClick={props.handleClick}>2</button>
          <button id="three" value="3" onClick={props.handleClick}> 3</button>
          <button id="zero" value="0" onClick={props.handleClick}>0</button>
          <button id="decimal" value=".">.</button>
        </div>
        <div>
          <button id="divide" value="/" onClick={props.handleOperation}>/</button>
          <button id="multiply" value="*" onClick={props.handleOperation}>x</button>
          <button id="subtract" value="-" onClick={props.handleOperation}>-</button>
          <button id="add" value="+" onClick={props.handleOperation}>+</button>
          <button id="equals" value="=" onClick={props.handleOperation}>=</button>

        </div>
      </div>
    </div>
  )
}

export default Numpad;
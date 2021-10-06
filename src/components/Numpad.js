import React from "react"

const Numpad = () => {
  return(
    <div>
      <div>
        <button id="clear">C</button>
      </div>
      <div>
        <div>
          <button id="seven" value="7">7</button>
          <button id="eight" value="8">8</button>
          <button id="nine" value="9">9</button>
          <button id="four" value="4">4</button>
          <button id="five" value="5">5</button>
          <button id="six" value="6">6</button>
          <button id="one" value="1">1</button>
          <button id="two" value="2">2</button>
          <button id="three" value="3">3</button>
          <button id="zero" value="0">0</button>
          <button id="decimal" value=".">.</button>
        </div>
        <div>
          <button id="divide">/</button>
          <button id="multiply">x</button>
          <button id="subtract">-</button>
          <button id="add">+</button>
          <button id="equals">=</button>

        </div>
      </div>
    </div>
  )
}

export default Numpad;
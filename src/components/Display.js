import React from "react"

const Display = (props) => {
  return(
    <div id="screen">
      <div id="output">{props.val}</div>
      <div id="display">{props.result}</div>
    </div>
  )
}

export default Display;
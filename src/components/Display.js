import React from "react"

const Display = (props) => {
  return(
    <div id="screen">
      <div id="display">{props.val}</div>
      <div id="output">{props.result}</div>
    </div>
  )
}

export default Display;
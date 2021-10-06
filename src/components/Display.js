import React from "react"

const Display = (props) => {
  return(
    <div id="screen">
      <div id="display">{props.val}</div>
      <div id="output"></div>
    </div>
  )
}

export default Display;
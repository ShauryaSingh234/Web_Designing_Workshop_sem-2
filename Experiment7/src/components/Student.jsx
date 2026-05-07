import React from 'react'

const Student = (props) => {
  return (
    <div class="student">
        <h2>{props.name}</h2>
        <h4>{props.course}</h4>
        <h4>{props.marks}</h4>
    </div>
  )
}

export default Student
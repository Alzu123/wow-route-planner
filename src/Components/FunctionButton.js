import React from 'react'

const FunctionButton = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <button type="submit">Draw</button>
      </div>
    </form>
  )
}

export default FunctionButton
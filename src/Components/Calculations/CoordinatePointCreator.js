import React from 'react'

const CoordinatePointCreator = (props) => {

  return (
    <form onSubmit={props.onSubmit}>

      <div>
        Type: 
        <select id="select" value={props.newType} onChange={props.handleOptionChange}>
          <option value="start">Start point</option>
          <option value="end">End point</option>
        </select>
      </div>

      <div>
        X: 
        <input
          value={props.newX}
          onChange={props.handleXChange}
        />
      </div>

      <div>
        Y: 
        <input
          value={props.newY}
          onChange={props.handleYChange}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default CoordinatePointCreator
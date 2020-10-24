import React from 'react'
import ReactDOM from 'react-dom'
import Map from './Components/Map'
import Canvas from './Components/Canvas'

const App = () => {

  return (
    <div>
      <Canvas />
      <Map />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

import React, { useRef, useEffect } from 'react'

import DrawCanvasElements from './DrawCanvasElements'

import continents from '../../Data/ContinentDB'

const canvasHeight = 533
const canvasWidth = 800

const Canvas = (props) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const canvasBg = new Image()
    canvasBg.src = props.continent.image.default

    canvasBg.onload = () => {
      DrawCanvasElements(canvas, canvasBg, props.teleports, props.nodes, props.finalRoute, props.continent.name)
    }

    // This should be done some other way but not sure how. Redrawing after onload feels weird.
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    DrawCanvasElements(canvas, canvasBg, props.teleports, props.nodes, props.finalRoute, props.continent.name)

  }, [props.teleports, props.continent, props.nodes, props.finalRoute])

  // Transform continents from object to array to loop over it. Also grab the key to set default value
  let continentArray = []
  let currentContinentKey
  for (const iContinent in continents) {
    continentArray.push({...continents[iContinent], key: iContinent})
    if (continents[iContinent].id === props.continent.id) {
      currentContinentKey = iContinent
    }
  }
  
  return (
  <div>
    <canvas width={canvasWidth} height={canvasHeight} ref={canvasRef} onClick={props.onClick}/>
    <br></br>
    Clicks currently edit :
      <select id="select" onChange={props.onClickEditChange}>
        <option value="start">Start point</option>
        <option value="end">End point</option>
      </select>
    <br></br>
    Current background :
      <select id="select" value={currentContinentKey} onChange={props.changeBackground}>
        {continentArray.map((continent, i) => <option value={continent.key} key={i}>{continent.name}</option>)}
      </select>
  </div>
  )
}

export default Canvas
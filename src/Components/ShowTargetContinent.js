import React from 'react'

const ShowTargetContinent = ({ onClick }) => {
  const icon = require('../Data/Images/Icons/Eye.png').default

  return <input type='image'
                alt='Show continent on map'
                title='Show on map'
                src={icon} 
                onClick={onClick} 
                width='16px' 
                height='8px'
          />
}

export default ShowTargetContinent
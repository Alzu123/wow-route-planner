import React, { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'

const PredictiveSearchField = ( props ) => {
  const [currentSelection, setCurrentSelection] = useState(['']);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(props.placeholder);

  if (props.propChanged && currentPlaceholder[0] !== props.value[0]) {
    setCurrentSelection([''])
    setCurrentPlaceholder(props.value)
  }

  return (
    <Typeahead
      id="basic-typeahead-single"
      labelKey="name"
      options={props.options}
      placeholder={currentPlaceholder}

      onChange={function(event) {
        props.resetPropChange()
        props.onChange(event)
        setCurrentSelection(event)
      }}
      onInputChange={function() {
        setCurrentPlaceholder(props.placeholder)
      }}
      
      selected={currentSelection}
    />
  )
}

export default PredictiveSearchField
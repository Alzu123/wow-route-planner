import React, { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'

const PredictiveSearchField = ( props ) => {
  const [currentSelection, setCurrentSelection] = useState([]);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(props.placeholder);

  if (props.propChanged && currentPlaceholder[0] !== props.value[0]) {
    setCurrentSelection([''])
    setCurrentPlaceholder(props.value)
  }

  return (
    <Typeahead
      id='basic-typeahead-single'
      labelKey={function(option) {
        if (option.name) {
          return `${option.name}, ${option.zone}`
        } else {
          return option
        }
      }}
      options={props.options}
      placeholder={currentPlaceholder}
      highlightOnlyResult={true}
      onChange={function(event) {
        props.resetPropChange()
        props.onChange(event)
        setCurrentSelection(event)
      }}
      onInputChange={function() {
        setCurrentPlaceholder(props.placeholder)
      }}
      renderMenuItemChildren={(option) => (
        <div>
          {option.name}
          <div>
            <small>{option.zone}</small>
          </div>
        </div>
      )}
      selected={currentSelection}
    />
  )
}

export default PredictiveSearchField
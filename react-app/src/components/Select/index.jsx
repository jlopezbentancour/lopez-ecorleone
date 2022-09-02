import React from 'react'

const Select = ({handleColor}) => {
  return (
    <select name="navColor" id="navColor" onChange={handleColor}>
       <option value="blue">Blue</option>
       <option value="red">Red</option>
       <option value="white">White</option>
       <option value="black">Default</option>

    </select>
  )
}

export default Select
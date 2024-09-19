import React from 'react'

const SidebarItem = ({item, number}) => {
  return (
    <div className="skill-row d-flex justify-content-sm-between text-lg">
          <div className="skill-type d-flex gap-4">
            <input type="checkbox" name="uxdesigner" id="uxdesigner" />
            <p>{item}</p>
          </div>
          <span>({number})</span>
        </div>
  )
}

export default SidebarItem

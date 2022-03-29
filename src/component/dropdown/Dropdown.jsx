import React from 'react'
import './dropdown.scss'
const Dropdown = (props) => {
  return (
    <div className={`dropdown ${props.className}`}>
        {
          props.items.map((item,index) => {
            return (
              <div className="dropdown__item" key={index}>
                <i className={item.icon}></i>
                <span>{item.content}</span>
              </div>
            )
          })
        }
    </div>
  )
}

export default Dropdown
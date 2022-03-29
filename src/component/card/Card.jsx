import React from 'react'
import './card.scss'

const Card = ({
    icon,
    count,
    title
}) => {
  return (
    <div className="card">
        <i className={icon}></i>
        <div className="content">
            <h1 className="content-count">{count}</h1>
            <div className="content-title">{title}</div>
        </div>
    </div>
  )
}

export default Card
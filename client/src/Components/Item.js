import React from 'react'

export default function Item({name,description,update,remove,date}) {
  return (
    <div className="item">
        <div className="text">{name}
            <div>Description:- {description}</div>      
          <sub>{date}</sub></div>
        <div className="icons">
        <i className="ri-pencil-fill" onClick={update}></i>
        <i className="ri-delete-bin-6-fill" onClick={remove}></i>
        </div>
    </div>
  )
}

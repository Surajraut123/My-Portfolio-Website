import React from 'react'
import "./portfoliolist.scss"
export default function Portfolio(props) {
  return (
    <li className={props.active ? "Portfoliolist active" : "portfoliolist"} onClick={()=> props.setselected(props.id)}>
      {props.title}
    </li>
  )
}

/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { NavLink } from "react-router-dom";

export default (props) => {

  const { manufacturers } = props

  return (
    manufacturers.map(manufacturer => {
      return (
        <li><NavLink to={`/${manufacturer.name}`} >{manufacturer.name}</NavLink></li>
      )
    })
  )
}
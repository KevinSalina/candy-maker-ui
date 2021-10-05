/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ManufacturerList from "../components/ManufacturerList/ManufacturerList";
import axios from 'axios'

const ManufacturerInfo = (props) => {

  const { manufacturer } = props.match.params

  const [manufacturerData, setManfacturerData] = useState([])

  useEffect(async () => {
    const fetch = await axios.get(`http://localhost:1337/api/manufacturers/${manufacturer}`)

    console.log(fetch)

    setManfacturerData(fetch.data)
  }, [])

  if (!manufacturerData.products) return (
    <div>Loading...</div>
  )

  return (
    <React.Fragment>
      <h1>{manufacturerData.name}</h1>
      <ManufacturerList manufacturers={manufacturerData.products} />
      <NavLink to="/">Go Back</NavLink>
    </React.Fragment>
  )

}

export default ManufacturerInfo
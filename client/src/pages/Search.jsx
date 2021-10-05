/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import ManufacturerList from "../components/ManufacturerList/ManufacturerList";
import SearchInput from "../components/SearchInput/SearchInput";


const Search = () => {
  const [manufacturers, setManufacturers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [displayMan, setDisplayMan] = useState([])

  useEffect(() => {
    manufacturerFetch()
  }, [])

  useEffect(() => {
    filterMan()
  }, [searchTerm])

  const manufacturerFetch = async () => {
    let fetch = await axios.get(`http://localhost:1337/api/manufacturers`)
    setManufacturers(fetch.data)
    setDisplayMan(fetch.data)
  }

  const filterMan = () => {
    setDisplayMan(
      manufacturers.filter(man => {
        const name = man.name.toLowerCase()
        const lowerCaseSearchTerm = searchTerm.toLowerCase()

        return name.includes(lowerCaseSearchTerm)
      })
    )
  }

  return (
    <div className="container">
      <h1>Candy Makers</h1>
      <SearchInput searchTerm={searchTerm} setterFunction={setSearchTerm} />
      <ul className="result">
        <ManufacturerList manufacturers={displayMan} />
      </ul>
    </div>
  )
}

export default Search;



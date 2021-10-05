import React from "react";

const SearchInput = (props) => {

  const { setterFunction, searchTerm } = props

  return (
    <input type="text" name="search" value={searchTerm} onChange={event => setterFunction(event.target.value)} />
  )
}

export default SearchInput
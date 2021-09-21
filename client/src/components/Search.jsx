import React, { useState } from "react";

const Search = () => {

  const [slug, setSlug] = useState('')

  return (
    <div className="container">
      <h1>Candy Makers</h1>
      <input type="text" name="search" value={slug} onChange={event => setSlug(event.target.value)} />
      <p className="result">{slug}</p>
    </div>
  )
}

export default Search;



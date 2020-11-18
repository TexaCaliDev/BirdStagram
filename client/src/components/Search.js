import React from 'react'

const Search = ({ onSubmit, onChange, value }) => (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Search"
        onChange={onChange}
      />
      <button type="submit">Search</button>
    </form>
  )
  
  export default Search
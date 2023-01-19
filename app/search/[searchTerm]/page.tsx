import React from 'react'

const SearchTerm = ({params: {searchTerm}} : {params: {searchTerm: string}}) => {
  return (
    <div>{searchTerm}</div>
  )
}

export default SearchTerm
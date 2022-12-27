import React from 'react'
import { SearchBarMain } from './SearchBar.style.jsx'


export default function SearchBar({changeValue, valueChaged}) {

  return (
    <SearchBarMain >
        <input type="search" placeholder="Search" onChange={changeValue} value={valueChaged}></input>
    </SearchBarMain>
  )
}

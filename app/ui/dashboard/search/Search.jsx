import React from 'react'
import styles from './search.module.css'
import { IoIosSearch } from "react-icons/io";

const Search = ({placeholder}) => {
  return (
    <div className={styles.container}>
        
        <IoIosSearch />
        <input type="text"  placeholder={placeholder} className={styles.input}/>
    </div>
  )
}

export default Search
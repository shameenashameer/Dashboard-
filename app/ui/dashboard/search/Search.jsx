
"use client"
import React from 'react'
import styles from './search.module.css'
import { IoIosSearch } from "react-icons/io";
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const {replace}=useRouter
  const pathname = usePathname();

  const handleSearch=(e)=>{
    const params=new URLSearchParams(searchParams);
    params.set("q",e.target.value);
    replace(`${pathname}?${params}`)
    
  }


  // console.log(searchParams);
  // console.log(pathname);
  return (
    <div className={styles.container}>
        
        <IoIosSearch />
        <input type="text"  placeholder={placeholder} className={styles.input} onChange={handleSearch}/>
    </div>
  )
}

export default Search
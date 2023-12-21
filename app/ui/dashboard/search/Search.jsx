
"use client"
import React from 'react'
import styles from './search.module.css'
import { IoIosSearch } from "react-icons/io";
import { usePathname, useSearchParams,useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
// import { useRouter } from 'next/router';

const Search = ({palceholder}) => {
  const searchParams = useSearchParams();
  const { replace}=useRouter();
  const pathname = usePathname();
  
  const handleSearch=useDebouncedCallback((e)=>{
    const params=new URLSearchParams(searchParams);
    params.set("page",1)
    if(e.target.value) {

    
    params.set("q", e.target.value);
    }else{
      params.delete("q")
    }
    replace(`${pathname}?${params.toString()}`);
  },300);


  
  return (
    <div className={styles.container}>
        
        <IoIosSearch />
        <input type="text" placeholder={palceholder} className={styles.input} onChange={handleSearch}/>
    </div>
  )
}

export default Search






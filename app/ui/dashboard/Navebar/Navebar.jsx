
"use client"
import React from 'react'
import styles from './navebar.module.css'
import { usePathname } from 'next/navigation'
import {MdNotifications,MdOutlineChat,MdPublic,MdSearch} from 'react-icons/md'

const Navebar = () => {
  const pathname=usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch/>
          <input type="text" placeholder='Search' className={styles.input}/>
          <div className={styles.icons}>
            <MdPublic size={20}/>
            <MdNotifications size={20}/>
            <MdOutlineChat size={20}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navebar
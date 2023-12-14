
"use client"
import React from 'react'
import styles from './menuLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdLogout } from 'react-icons/md'
const MenuLink = ({item}) => {

const pathname=usePathname();
console.log(pathname);
    // const href=item?.path || '/default-path';
  return (
    <>
    <Link href={item.path} className={`${styles.container} ${pathname===item.path && styles.active}`}>
      {item.icon}
      <div className={styles.title}>{item.title}</div>

    </Link>
    
    </>
  )
}

export default MenuLink


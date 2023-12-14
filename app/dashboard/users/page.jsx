
"use client"

import React from 'react'
// import Search from './ui/dashboard/search/Search'
import styles from './ui/dashboard/users/users.module.css'



// import styles from '../ui/dashboard/users/users.module.css'


const Users = () => {
  return (
    <>
    <div className={styles.container}>Users</div>
    <Search paceholder="Search Users"/>
    </>
  )
}

export default Users
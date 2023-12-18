import React from 'react'
import styles from '../ui/login/login.module.css'
const login = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder='Username' />
        <input type="password"  />
        <button>login</button>
      </form>
    </div>
  )
}

export default login
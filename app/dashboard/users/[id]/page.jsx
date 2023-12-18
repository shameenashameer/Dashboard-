import React from 'react'
import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css'
const Id = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" alt="" fill/>
            </div>
            Shameena
        </div>

        <div className={styles.formContainer}>
            <form action="" className={styles.form}>
            <label >UserName</label>
            <input type="text" name='username' placeholder='Shameena' />
            <label >Email</label>
            <input type="email" name='email' placeholder='Shameena@gmail.com' />
            <label >Password</label>
            <input type="password" name='password' />
            <label >Phone</label>
            <input type="phone" name='phone' placeholder='+12365897' />
            <label >Address</label>
            <textarea type="text" name='address' placeholder='Wayanad' />
            <label >Is Admin</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <label >Is Active </label>
            <select name="isActive" id="isActive">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
<button>Update</button>
          
            </form>
          

        </div>
    </div>
  )
}

export default Id
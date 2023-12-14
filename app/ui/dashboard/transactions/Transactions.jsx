import React from 'react'
import styles from './transactions.module.css'

const Transactions = () => {
  return (
    <div className={styles.container}>

      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
              <img 
              src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
              height={40} 
              width={40} 
              className={styles.userimg}/>
              Shameena
           
              </div>
            </td>

            <td>
              <span 
              className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
              </td>

            <td>14-02-2023</td>
            <td>$300.00</td>
            </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <img
               src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
               height={40}
                width={40} 
                className={styles.userimg}/>
                Shameer
                </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending
              </span>
              </td>

            <td>14-02-2023</td>
            <td>$300.00</td>
            </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <img 
              src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg
              "height={40} 
              width={40} 
              className={styles.userimg}/>
              Misba
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done
              </span>
              </td>

            <td>14-02-2023</td>
            <td>$300.00</td>
            </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <img
               src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
               height={40}
                width={40} 
                className={styles.userimg}/>
                Mihla
                </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled
              </span>
              </td>

            <td>14-02-2023</td>
            <td>$300.00</td>
            </tr>
          </tbody>
      </table>
    </div>
  )
}

export default Transactions
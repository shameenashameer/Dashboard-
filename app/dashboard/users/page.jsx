"use client";

import React from "react";
import Search from "../../ui/dashboard/search/Search";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Paginations from "../../ui/dashboard/paginations/Pagination";

// import styles from '../ui/dashboard/users/users.module.css'

const Users = ({ palceholder }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search palceholder="Search for a user..." />
          <Link href={"/dashboard/users/add"}>
            <button className={styles.addbtn}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created at</td>
              <td>Rule</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div className={styles.user}>
                <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                  height={40} width={40} alt="" className={styles.userimg}/>
                  Shameena
                  </div>
                  </td>
              <td>5Tq0U@example.com</td>
              <td>10/10/2022</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className={styles.buttons}>
                <Link href="/">

                <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
                </td>
            </tr>
            <tr>
              <td><div className={styles.user}>
                <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                  height={40} width={40} alt="" className={styles.userimg}/>
                  Shameena
                  </div>
                  </td>
              <td>5Tq0U@example.com</td>
              <td>10/10/2022</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className={styles.buttons}>
                <Link href="/">

                <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
                </td>
            </tr>
          </tbody>
        </table>
        <Paginations/>
      </div>
    </>
  );
};

export default Users;

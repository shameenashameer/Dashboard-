"use client";

import React from "react";
import Search from "../../ui/dashboard/search/Search";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Paginations from "../../ui/dashboard/paginations/Pagination";

// import styles from '../ui/dashboard/users/users.module.css'

const Products = ({ palceholder }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search palceholder="Search for a Product..." />
          <Link href={"/dashboard/products/add"}>
            <button className={styles.addbtn}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Discription</td>
              <td>Price</td>
              <td>Created at</td>
              <td>Stock</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div className={styles.product}>
                <img src="https://stores.blackberrys.com/VendorpageTheme/Enterprise/EThemeForBlackberrys/images/product-not-found.jpg"
                  height={40} width={40} alt="" className={styles.productImg}/>
                  Samsung
                  </div>
                  </td>
              <td>Desc</td>
              <td>$999</td>
              <td>10/10/2022</td>
              <td>Active</td>
              <td>
                <div className={styles.buttons}>
                <Link href="/dashboard/products/test">

                <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
                </td>
            </tr>
            <tr>
              <td><div className={styles.product}>
                <img src="https://stores.blackberrys.com/VendorpageTheme/Enterprise/EThemeForBlackberrys/images/product-not-found.jpg"
                  height={40} width={40} alt="" className={styles.productimg}/>
                IPhone
                  </div>
                  </td>
              <td>Desc</td>
              <td>$999</td>
              <td>10/10/2022</td>
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

export default Products;

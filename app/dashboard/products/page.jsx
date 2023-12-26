// "use client";

import React from "react";
import Search from "../../ui/dashboard/search/Search";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Paginations from "../../ui/dashboard/paginations/Pagination";
import { fetchProducts } from "../../lib/data";

// import styles from '../ui/dashboard/users/users.module.css'

const Products =async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const {count,products } = await fetchProducts(q, page)
  console.log(products,"products");
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
        {products?.map((product)=>(

       


            <tr key={product.id}>
              <td><div className={styles.product}>
                <img src={product.img || "https://stores.blackberrys.com/VendorpageTheme/Enterprise/EThemeForBlackberrys/images/product-not-found.jpg"}
                  height={40} width={40} alt="" className={styles.productImg}/>
                  {product.title}
                  </div>
                  </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().splice(4,16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                <Link href= {`/dashboard/products/${product.id}`}>

                <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
                </td>
            </tr>
          
       ) )}
          </tbody>
        </table>
        <Paginations count={count}/>
      </div>
    </>
  );
};

export default Products;

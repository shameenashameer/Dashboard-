// "use client";
import React from "react";
import Search from "../../ui/dashboard/search/Search";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Paginations from "../../ui/dashboard/paginations/Pagination";
import { fetchUsers } from "../../lib/data";

// import styles from '../ui/dashboard/users/users.module.css'

const Users = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, users } = await fetchUsers(q, page);

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
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className={styles.user}>
                    <img
                      src={
                        user.img ||
                        "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                      }
                      height={40}
                      width={40}
                      alt=""
                      className={styles.userimg}
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.Admin ? "Admin" : "Client"}</td>
                <td>{user.Active ? "Active" : "Passive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Paginations count={count} />
      </div>
    </>
  );
};

export default Users;


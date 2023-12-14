import React from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import styles from "./rightbar.module.css";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <img
            src="https://img.pikbest.com/png-images/sloth-astronaut-vector-illustration_5608780.png!w700wp"
            className={styles.bg}
            alt=""
            fill
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notifications}>🔥Available Now</span>
          <h3 className={styles.title}>
            How to use the new vwersion of the admin dashboard?
          </h3>
          <span className={styles.subTitle}>Takes 4 minuts yo learn </span>
          <p className={styles.discriptions}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ad
            eius veritatis mollitia inventore sunt dolorum pariatur atque,
            maxime perspiciatis nulla soluta voluptatum sit dolore vero eaque,
            culpa optio. Dolorem.
          </p>

          <button className={styles.button}>
            <TbPlayerPlayFilled />
            Watch
          </button>
        </div>
<div className={styles.item}>
        <div className={styles.bgContainer}>
          <img
            src="https://img.pikbest.com/png-images/sloth-astronaut-vector-illustration_5608780.png!w700wp"
            className={styles.bg}
            alt=""
            fill
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notifications}>🚀 Available Now</span>
          <h3 className={styles.title}>
            How to use the new vwersion of the admin dashboard?{" "}
          </h3>
          <span className={styles.subTitle}>Takes 4 minuts yo learn </span>
          <p className={styles.discriptions}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ad
            eius veritatis mollitia inventore sunt dolorum pariatur atque,
            maxime perspiciatis nulla soluta voluptatum sit dolore vero eaque,
            culpa optio. Dolorem.
          </p>

          <button className={styles.button}>
            <TbPlayerPlayFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Rightbar;

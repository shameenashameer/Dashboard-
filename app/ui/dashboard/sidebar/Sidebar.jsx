import React from "react";
import styles from "./sidebar.module.css";
import MenuLink from "./menulink/MenuLink";
import { AiOutlineTransaction } from "react-icons/ai"
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import {
  MdDashboardCustomize,

  MdSupervisedUserCircle,
  MdShoppingBag,
MdLogout,
 MdPreview,

  MdAnalytics,
  MdOutlineSettings ,
  MdHelpCenter,
 
} from "react-icons/md";

const menuItem = [
  {
    title: "pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboardCustomize />,
      },

      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <AiOutlineTransaction />
      },
     
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon:<MdPreview />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon:<PiMicrosoftTeamsLogo />
      },
    
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.user}>
        <img className="userimg" src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" width={50} height={50} />
        <div className={styles.userDetailes}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
      </div>
</div>
    <ul className={styles.list}>
        {menuItem.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

<button className={styles.logout}>
<MdLogout/>
  
  Logout</button>

    </div>


  );
};
export default Sidebar;

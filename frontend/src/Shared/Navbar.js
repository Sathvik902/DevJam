import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBolt } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* <img src="/logo.png" alt="Company Logo" /> */}
        <FaBolt /> 
        <span>Title</span>
      </div>
      <ul className={`${styles.menu} ${isOpen ? styles.showMenu : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Login/Signup</a>
        </li>
        <li>
          <form className={styles.searchForm}>
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

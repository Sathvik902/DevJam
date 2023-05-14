import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBolt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="about">About</NavLink>
        </li>
        <li>
          <NavLink href="contact">Contact</NavLink>
        </li>
        <li>
          <NavLink href="/login">Login/Signup</NavLink>
        </li>
        {/* <li>
          <form className={styles.searchForm}>
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;

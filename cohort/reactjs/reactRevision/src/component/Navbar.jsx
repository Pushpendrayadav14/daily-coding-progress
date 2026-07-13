import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbox}>
      <a href="#">Home</a>
      <a href="#">About us</a>
      <a href="#">Servise</a>
      <a href="#">product</a>
    </div>
  );
};

import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className="Container">
        <p>copyright © 2023</p>
        <Image
          src="/img/large-pastoral-logo.png"
          alt="Logo"
          width={80}
          height={80}
          
        />
      </div>
    </footer>
  );
}

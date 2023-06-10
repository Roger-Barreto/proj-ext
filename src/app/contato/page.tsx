'use client'
import Image from "next/image";
import React from "react";
import styles from "./Contato.module.css";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

function Contato() {
  const NavigateTo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main className={styles.Main}>
      <div className="Container" style={{ width: "auto" }}>
        <div className={styles.Content}>
          <div className={styles.TextContent}>
            <h1 className={styles.Title}>Contatate-nos</h1>
            <div className={styles.Item}>
              <MdEmail size={35} color="#007dcd" />
              <p>ecologiaintegral@cnbbsul1.org.br</p>
            </div>
            <div
              className={styles.Item}
              onClick={() =>
                NavigateTo(
                  "https://www.instagram.com/ecologiaintegralsul1/?hl=en"
                )
              }
            >
              <AiFillInstagram size={35} color="#007dcd" />
              <p>@ecologiaintegralsul1</p>
            </div>
          </div>

          <div className={styles.Image}>
            <Image
              src="/img/contact.svg"
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contato;

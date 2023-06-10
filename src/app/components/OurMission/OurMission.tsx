import React from "react";
import styles from "./OurMission.module.css";
import Image from "next/image";

export default function OurMission() {
  return (
    <section className={styles.Section}>
      <div className={styles.Dumb1}></div>
      <div className="Container" style={{ width: "auto" }}>
        <div className={styles.Content}>
          <div className={styles.Image}>
            <Image
              src="/img/small-pastoral-logo.png"
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className={styles.Text}>
            <h1 className={styles.Title}>Nossa Missão</h1>
            <p className={styles.Subtitle}>
              Nossa missão enquanto Pastoral da Ecologia Integral, por meio do
              nobre projeto “Água: Fonte de Vida”, é reunir pastorais e
              universidades do estado de São Paulo por meio de projetos com o
              objetivo de realizar a conversão ecológica da comunidade e
              estimular o surgimento de ideias sobre o uso eficiente da água.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.Dumb2}></div>

      <svg
        className={styles.Svg1}
        width="1440"
        height="202"
        viewBox="0 0 1440 202"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0.5C295.5 411 833 49 1440 143V0.5H0Z" fill="white" />
      </svg>

      <svg
        width="1440"
        className={styles.Svg2}
        height="129"
        viewBox="0 0 1440 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1440 129C1027.5 -79 833.5 250.5 0 0.5V129H1440Z"
          fill="white"
        />
      </svg>
    </section>
  );
}

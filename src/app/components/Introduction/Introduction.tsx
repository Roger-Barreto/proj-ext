'use client';
import React, { use } from "react";
import styles from "./Introduction.module.css";
import { BsPlayCircle } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Introduction() {
  function navigateTo() {
    window.open(
      "https://www.cnbb.org.br/a-pastoral-da-ecologia-integral/",
      "_blank"
    );
  }
  return (
    <section className={styles.Section}>
      <div className="Container">
        <div className={styles.Image}>
          <Image
            src="/img/large-logo.png"
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.Text}>
          <h1 className={styles.Title}>Pastoral Da Ecologia Integral</h1>
          <p className={styles.Subtitle}>
            A pastoral da Ecologia Integral, que busca seguir os objetivos da
            Encíclica “Laudato Si ” do Papa Francisco, é a principal responsável
            pelo projeto “Água: Fonte de Vida” e muitos outros projetos
            sustentáveis.
          </p>

          <div className={styles.Buttons}>
            <button onClick={() => navigateTo()} className={styles.Button}>
              Saiba +
            </button>
            <button className={styles.ButtonWatchVideo}>
              <BsPlayCircle />
              Assistir Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

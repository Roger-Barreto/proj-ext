import React from "react";
import styles from "./Introduction.module.css";
import { BsPlayCircle } from "react-icons/bs";
import Image from "next/image";

export default function Introduction() {
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
            <button className={styles.Button}>Saiba mais</button>
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

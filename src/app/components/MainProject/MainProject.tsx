import React from "react";
import Image from "next/image";
import styles from "./MainProject.module.css";
import { BsPlayCircle } from "react-icons/bs";

export default function MainProject() {
  return (
    <section className={styles.Section}>
      <div className="Container" style={{'position': 'relative', width: 'auto'}}>
        <div className={styles.Header}>
          <h1 className={styles.Title}>Projeto Água</h1>
          <h1 className={styles.Subtitle}>Fonte de vida</h1>
          <div className={styles.Image}>
            <Image
              src="/img/header-projeto-agua.png"
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <p className={styles.Content}>
          Todos sabemos que a água está em risco de “extinção” hoje em dia. E
          por isso, o projeto “Água: Fonte de Vida” promove estratégias para que
          em cada diocese do Regional Sul 1 ocorra a conversão ecológica, por
          meio da criação de uma “Pastoral da Ecologia”. Todas as dioceses
          trabalhando em conjunto pela sustentabilidade e o bom uso da água.
        </p>

        <div className={styles.Buttons}>
          <button className={styles.Button}>Saiba mais</button>
          <button className={styles.ButtonWatchVideo}>
            <BsPlayCircle />
            Assistir Video
          </button>
        </div>
      </div>
    </section>
  );
}

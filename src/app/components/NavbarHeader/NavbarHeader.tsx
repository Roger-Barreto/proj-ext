"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./NavbarHeader.module.css";
import { useRouter, usePathname } from "next/navigation";

export default function NavbarHeader() {
  const pathName = usePathname();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className={styles.Header}>
      <nav className="Container" style={{ width: "auto" }}>
        <div className={styles.Logo}>
          <Image src="/img/small-logo.png" alt="Logo" width={50} height={50} />
        </div>
        <Link
          href="/"
          className={pathName == "/" ? styles.ActiveLink : styles.HeaderLink}
        >
          Início
        </Link>
        <Link
          href="#"
          onClick={() => scrollTo("NossaMissao")}
          className={styles.HeaderLink}
        >
          Nossa Missão
        </Link>
        <Link
          href="#"
          onClick={() => scrollTo("Projeto")}
          className={styles.HeaderLink}
        >
          Projeto Água: Fonte de Vida
        </Link>
        <Link
          href="/contato"
          className={
            pathName == "/contato" ? styles.ActiveLink : styles.HeaderLink
          }
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}

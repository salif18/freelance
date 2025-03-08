"use client"
import React from 'react'
import styles from "../styles/_footer.module.scss"
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* sociaux */}
      <section className={styles.resauxSociaux}>
        <p >Suivez-nous sur</p>
        <div className={styles.row}>
          <span><FaFacebookSquare /></span>
          <span><BsWhatsapp /></span>
          <span><LuInstagram /></span>
          <span><FaLinkedinIn /></span>
        </div>
      </section>
      {/* contacts */}
      <section className={styles.contacts}>
        <Link href="/contacts"> <span>Nous contacter</span></Link>
        <Link href="/abouts"> <span>A propos de freelance</span></Link>
        <Link href="/#commentcamarche"> <span>Comment ça marche ?</span></Link>
      </section>
      {/* copy */}
      <section className={styles.copy}>
        <Link href="/confidentialites"> <span>Politiques de confidentialitées</span></Link>
        <p className='contact'>Copyright &copy; FreeMali 2023 - Tous droits réservés</p>
      </section>
    </footer>
  )
}

export default Footer

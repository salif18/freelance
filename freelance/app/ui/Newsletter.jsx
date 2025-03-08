import React from 'react'
import styles from "../styles/_newsletter.module.scss"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineSend } from "react-icons/ai";

function Newsletter() {
  return (
    <section className={styles.newsLetter}>
      <h2>VOTRE-AVIS</h2>
      <p>Inscrivez-vous pour pouvoir donner votre suggestion</p>
      <section className={styles.form}>
        <input
          type='email'
          placeholder="Ecris votre message..."
        />
        <button className={styles.btnSend} >Envoyer <AiOutlineSend /> </button>
      </section>
      <section className={styles.sociaux}>
        <span><FaSquareFacebook /></span>
        <span><FaWhatsapp /></span>
        <span><FaLinkedinIn /></span>
        <span><FaInstagram /></span>
      </section>

    </section>
  )
}

export default Newsletter

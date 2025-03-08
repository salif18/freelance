"use client"

import React from 'react'
import { useRouter} from 'next/navigation'
import styles from "../../styles/_forget.module.scss";
import LayoutPage from '@/app/layouts/Layout';
import Link from 'next/link';

const page = () => {
     const router = useRouter()
    return (
        <LayoutPage>
            <main className={styles.reset}>
              <section className={styles.title}>
              <h3>Récuperer votre compte</h3>
             <p>Veuillez entrer les bonnes informations pour pouvoir nous aider à réinitialiser votre mot de passe</p>  
              </section>
              <form className={styles.form}>
              <h1>Respectez-les consignes</h1>
              <div className={styles.barre}></div>
              <section className={styles.colomn}>
                        <label htmlFor='numero'>Numéro</label>
                        <input type="tel" id='numero' name="numero" placeholder='Votre numéro  ' />
                        {/* <span>error</span> */}
                    </section>
                    <section className={styles.colomn}>
                        <label htmlFor='email'>Email</label>
                        <input type="email" id='email' name="email" placeholder='Votre email ' />
                        {/* <span>error</span> */}
                    </section>
                    <button type='submit'>Envoyer</button>
              </form>
            </main>
        </LayoutPage>

    )
}
export default page
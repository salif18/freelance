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
              <h3>Validation le mot de passe</h3>
             <p>Veuillez entrer les bonnes informations pour pouvoir valider le nouveau mot de passe</p>  
              </section>
              <form className={styles.form}>
              <h1>Respectez-les consignes</h1>
              <div className={styles.barre}></div>
              <section className={styles.colomn}>
                        <label htmlFor='new-password'>Nouveau mot de passe</label>
                        <input type="password" id='new-password' name="newpassword" placeholder='Votre nouveau mot de passe  ' />
                        {/* <span>error</span> */}
                    </section>
                    <section className={styles.colomn}>
                        <label htmlFor='confirm-password'>Confirmation de mot de passe</label>
                        <input type="password" id='confirm-password' name="confirm-password" placeholder='Retaper le mot de passe ' />
                        {/* <span>error</span> */}
                    </section>
                    <p>Veuillez entrer les 4 chiffres de validation</p>
                    <section className={styles.row}>
                        <input type="text"  name="token1" placeholder='0 ' />
                        <input type="text"  name="token2" placeholder='0' />
                        <input type="text"  name="token3" placeholder='0' />
                        <input type="text"  name="token4" placeholder='0' />
                        {/* <span>error</span> */}
                    </section>
                    
                    <button type='submit'>Envoyer</button>
              </form>
            </main>
        </LayoutPage>

    )
}
export default page
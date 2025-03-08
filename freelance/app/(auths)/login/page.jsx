"use client"

import React from 'react'
import { useRouter} from 'next/navigation'
import styles from "../../styles/_auth.module.scss";
import LayoutPage from '@/app/layouts/Layout';
import Link from 'next/link';

const page = () => {
     const router = useRouter()
    return (
        <LayoutPage>
            <main className={styles.auth}>
              <section className={styles.rigth}>
              <h3>Freelance</h3>
             <p>Connectez vous et gagnez des relations <br/>dans le cadre de travail sur notre plateform </p>
            
              </section>
              <form className={styles.form}>
              <h1>Connectez-vous</h1>
              <section className={styles.row}>
                    <section className={styles.leftContainer}>
                    <section className={styles.colomn}>
                        <label htmlFor='contacts'>Nom</label>
                        <input type="text" id='contacts' name="contacts" placeholder='Votre numéro ou email ' />
                        {/* <span>error</span> */}
                    </section>
                    <section className={styles.colomn}>
                        <label htmlFor='password'>Mot de passe</label>
                        <input type="password" id='password' name="password" placeholder='Votre mot de passe ' />
                        {/* <span>error</span> */}
                    </section>
                    </section>
                    <div className={styles.barreVertical}></div>
                    <section className={styles.rigthContainer}>
                    <section className={styles.colomn}>
                    <figure>
                        <img src="https://www.terawork.com/blog/wp-content/uploads/2022/11/become-a-freelancer-with-creatopy-1024x525.png"  alt='' />
                    </figure>
                    </section>
                    </section>
                    </section>
                    <section className={styles.forget}>
                    <Link href="/reset">Mot de passe oublié ?</Link>
                    </section>
                    <button type='submit'>Se connecter</button>
                    <section className={styles.ask}>
                        <p>Vous n'avez pas de compte ? <Link href="/"> Créer un  compte</Link></p>
                    </section>
              </form>
            </main>
        </LayoutPage>

    )
}
export default page
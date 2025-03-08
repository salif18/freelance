"use client"

import React from 'react'
import styles from "../../../styles/_auth.module.scss";
import LayoutPage from '@/app/layouts/Layout';

const page = () => {
    return (
        <LayoutPage>
            <main className={styles.auth}>
                <section className={styles.rigth}>
                    <h3>Vous etes à la recherche d'une embauche</h3>
                    <p>
                        Bienvenue sur notre <span className="plate">plateforme</span>, un service qui permet de vous mettre
                        en contact avec les recruteurs ou les entreprises à l'aide d'un seul bouton
                    </p>
                    <p>Créer votre compte et trouver vos embaucheurs.</p>

                    <figure>
                        <img src="https://www.terawork.com/blog/wp-content/uploads/2022/11/become-a-freelancer-with-creatopy-1024x525.png"  alt='' />
                    </figure>
                </section>

                <form className={styles.form}>
                    <h1>Inscrivez-vous</h1>
                    
                    <section className={styles.row}>
                    <section className={styles.leftContainer}>
                    <section className={styles.colomn}>
                        <label htmlFor='nom'>Nom</label>
                        <input type="text" id='nom' name="nom" placeholder='Votre nom ' />
                        {/* <span>error</span> */}
                    </section>
                    <section className={styles.colomn}>
                        <label htmlFor='prenom'>Prénom</label>
                        <input type="text" id='prenom' name="prenom" placeholder='Votre prénom ' />
                        {/* <span>error</span> */}
                    </section>
                    </section>
                    <div className={styles.barreVertical}></div>
                    <section className={styles.rigthContainer}>
                    <section className={styles.colomn}>
                        <label htmlFor='numero'>Numéro</label>
                        <input type="tel" id='numero' name="numero" placeholder='Votre numéro ' />
                        {/* <span>error</span> */}
                    </section>
                    <section className={styles.colomn}>
                        <label htmlFor='email'>Email</label>
                        <input type="email" id='email' name="email" placeholder='Votre email ' />
                        {/* <span>error</span> */}
                    </section>
                    <section className={styles.colomn}>
                        <label htmlFor='password'>Mot de passe</label>
                        <input type="password" id='password' name="password" placeholder='Votre mot de passe ' />
                        {/* <span>error</span> */}
                    </section>
                    </section>
                    </section>
                    <section className={styles.politique}>
                        <p>En s'inscrivant j'accepte <span>les Conditions d'utilisation et</span><br /><span>les politiques de confidentialité</span> </p>
                    </section>
                    <button type='submit'>S'inscrire</button>
                </form>
            </main>
        </LayoutPage>

    )
}
export default page
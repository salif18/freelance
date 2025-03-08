"use client"

import React from 'react'
import { useRouter} from 'next/navigation'
import styles from "../styles/_banner.module.scss"
function Banner() {

  const router = useRouter()
  return (
    <section className={styles.falseBackground}>
    <section className={styles.banner}>
      {/* <h1>
        Veuillez créer votre profile pour finaliser votre inscription, et
        <br />
        rejoignez notre <span>Plateforme !</span>
      </h1>
      <button className={styles.btnCreateProfil}>
        Créer votre profil
      </button> */}

      <h1>
        Vous avez besoin d'embaucher ou vous recherchez une embauche en ligne
        ? <br />
        Rejoignez notre <span>Plateforme !</span>
      </h1>
      <h3>Trouvez des professionnels qualifiés pour vos services</h3>
      <p>Inscrivez-vous !</p>
      <div className={styles.btnContainer}>
              <button
                className={styles.inscriptionPresta}
                onClick={()=> router.push('/registre/candidats')}
                >
                Candidat(e)s
              </button>
            
              <button
                className={styles.inscriptionClient}
                onClick={()=> router.push('/registre/recruteurs')}
                >
                Récruteurs 
              </button>
          
          </div>
</section>
    </section>
  )
}

export default Banner

"use client";

import React from 'react'
import styles from '../styles/_offreCard.module.scss'
function OffreCard({item}) {
  return (
    <section className={styles.cardOffre}>
      <section className={styles.row}>
      <section className={styles.profil}>
       <figure>
        <img src={item.img} alt='' />
       </figure>
     
         <p>{item.name}</p>
       
     </section>
   
        <p>{item.date}</p>
      </section>
      <section className={styles.column}>
       <h2>{item.categorie_offre}</h2>
       <p>{item.sujet}</p>
       <p>Candidatures({item.candidatures})</p>
      </section>
    </section>
  )
}

export default OffreCard

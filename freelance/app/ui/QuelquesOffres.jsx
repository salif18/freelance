import React from 'react'
import PrestataireCard from '../components/PrestataireCard'
import styles from "../styles/_quelques_offres.module.scss"
import OffreCard from '../components/OffreCard'

function QuelquesOffres() {

  const _offreList = [
    {
      _id:1,
      name:"Hervé",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      categorie_offre:"Informatiques",
      sujet:"A la recherche de deux informaticiens pour deux postes",
      candidatures:0,
      date:"07/03/2025"
    },
    {
      _id:2,
      name:"BKSHOP",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      categorie_offre:"Developpeur",
      sujet:"A la recherche d'un developpeur",
      candidatures:0,
      date:"07/03/2025"
    },
    {
      _id:3,
      name:"Clinique Polytechnique",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      categorie_offre:"Santé",
      sujet:"A la recherche d'un technicien de santé pour deux postes",
      candidatures:0,
      date:"07/03/2025"
    },
    {
      _id:4,
      name:"Amadou",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      categorie_offre:"Redacteur",
      sujet:"A la recherche d'un redacteur",
      candidatures:0,
      date:"07/03/2025"
    },
    
    
  ]
  return (
    <section className={styles.quelquesOffres}>
    <h1>Les offres d'emploi récents &#8594;</h1>
    
    <section className={styles.row}>
    {_offreList
        .slice(0, 6)
        
        .map((item) => (
          <OffreCard item={item} key={item._id} />
        ))}
    </section>

  </section>
  )
}

export default QuelquesOffres

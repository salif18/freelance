import React from 'react'
import styles from "../styles/_quelques_prestataires.module.scss"
import PrestataireCard from '../components/PrestataireCard'
function QuelquesPrestataires() {
  const PrestataireList = [
    {
      _id:1,
      name:"Amadou",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession:"Technicien sante"
    },
    {
      _id:2,
      name:"Amadou",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession:"Technicien sante"
    },
    {
      _id:3,
      name:"Amadou",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession:"Technicien sante"
    },
    {
      _id:4,
      name:"Amadou",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession:"Technicien sante"
    },
    {
      _id:5,
      name:"Amadou",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession:"Technicien sante"
    },
    {
      _id:6,
      name:"Amadou",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession:"Technicien sante"
    }
  ]
  return (
    <section className={styles.quelquesPrestataire}>
      <h1>Trouver des experts qualifiés pour vos services</h1>
      
      <section className={styles.row}>
      {PrestataireList
          .slice(0, 6)
          
          .map((item) => (
            <PrestataireCard item={item} key={item._id} />
          ))}
      </section>

      <button className={styles.btnMore}> Découvrir nos services professionnels &#8594;</button>
    </section>
  )
}

export default QuelquesPrestataires

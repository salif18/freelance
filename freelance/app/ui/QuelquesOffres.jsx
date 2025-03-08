import React from 'react'
import PrestataireCard from '../components/PrestataireCard'
import styles from "../styles/_quelques_offres.module.scss"

function QuelquesOffres() {

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
    }
  ]
  return (
    <section className={styles.quelquesOffres}>
    <h1>Les offres d'emploi &#8594;</h1>
    
    <section className={styles.row}>
    {PrestataireList
        .slice(0, 6)
        
        .map((item) => (
          <PrestataireCard item={item} key={item._id} />
        ))}
    </section>

  </section>
  )
}

export default QuelquesOffres

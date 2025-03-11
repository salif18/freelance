import React from 'react'
import LayoutPage from '../layouts/Layout'
import styles from "../styles/_employe.module.scss"
import PrestataireCard from '../components/PrestataireCard'

export default function page() {


  const freelancevip = [
    {
      _id: 1,
      name: "Amadou",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession: "Technicien sante",
      category: "Santé"
    },
    {
      _id: 2,
      name: "Amadou",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession: "Technicien sante",
      category: "Informatiques"
    },
    {
      _id: 3,
      name: "Amadou",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession: "Technicien sante",
      category: "Santé"
    },
    {
      _id: 4,
      name: "Amadou",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession: "Technicien sante",
      category: "Informatiques"
    },

  ]
  const freelances = [

    {
      _id: 3,
      name: "Amadou",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession: "Technicien sante",
      category: "Rédacteur"
    },
    {
      _id: 4,
      name: "Amadou",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession: "Technicien sante",
      category: "Educations"
    },
    {
      _id: 5,
      name: "Amadou",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession: "Technicien sante",
      category: "Entreprenariat"
    },
    {
      _id: 6,
      name: "Amadou",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession: "Technicien sante",
      category: 'Marketing'
    },
    {
      _id: 7,
      name: "Amadou",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession: "Technicien sante",
      category: "Santé"
    },
    {
      _id: 8,
      name: "Amadou",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlgUtBQrgA8rzPYDpXnr02e8OFVQLBuLQcw&s",
      proffession: "Technicien sante",
      category: "Informatiques"
    },
  ]

  const filterFreelance = ""

  // data/freelancers.js
  const freelancers = [
    {
      id: 1,
      name: "John Doe",
      skills: ["React", "Node.js", "JavaScript"],
      category: "Web Development",
      experience: "5 years",
      location: "New York",
    },
    {
      id: 2,
      name: "Jane Smith",
      skills: ["Python", "Data Science", "Machine Learning"],
      category: "Data Science",
      experience: "3 years",
      location: "San Francisco",
    },
    {
      id: 3,
      name: "Alice Johnson",
      skills: ["Graphic Design", "UI/UX", "Adobe XD"],
      category: "Design",
      experience: "4 years",
      location: "Chicago",
    },
  ];

  return (
    <LayoutPage>
      <div className={styles.container}>
        <aside>
          <h2>Options de recherches</h2>
          <div className={styles.borderBottom}></div>
          <section className={styles.asideMenu}>

            <h3>Rechercher</h3>
            <form>
              <label>
                <input type='text' name='searchQuery'   placeholder=' Mots clés' />
              </label>
            </form>

            <h3>Tarif</h3>
            <input
              type="range"
              name="maxPrice"
              min="0"
              max="100000"
              // value=""
              // onChange=""
              // onClick=""
            />
            <p>Salaire: <span>300 000 FCFA</span></p>

            <h3>Categories</h3>
            <select  >
              <option value="">All Categories</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Design">Design</option>
            </select>

            <h3>Compétences requises</h3>
            <form>
              <label>
                <input type='text' name='searchQuery'  placeholder=' Compétences' />
              </label>
            </form>

            <h3>Lieu</h3>
            <form>
              <label>
                <input type='text' name='searchQuery'   placeholder='Lieu' />
              </label>
            </form>

          </section>
        </aside>
        <main>
          {/* les abonnee */}
          <section className={styles.column}>
            <section className={styles.banner} >
              <h2>Parcourez les profils dans le blog puis choisissez celui qui vous convient le mieux</h2>
            </section>
            <h2>Services professionnels populaires</h2>
            <ul className={styles.grid}>
              {
                freelancevip.map((item) => (
                  <li key={item._id}>
                    <PrestataireCard item={item} />
                  </li>
                ))
              }
            </ul>
          </section>
          {/* nos categorie */}
          <section className={styles.column}>
            <h2>Choisissez votre freelance pour son savoir-faire</h2>
            <ul className={styles.grid}>
              {
                freelances.map((item) => (
                  <li key={item._id}>
                    <PrestataireCard item={item} />
                  </li>
                ))
              }
            </ul>
          </section>

        </main>
      </div>
    </LayoutPage>
  )
}

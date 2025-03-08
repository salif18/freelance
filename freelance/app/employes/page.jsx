import React from 'react'
import LayoutPage from '../layouts/Layout'
import styles from "../styles/_employe.module.scss"

export default function page() {
  return (
    <LayoutPage>
      <main className={styles.employe}>
       <section className={styles.banner} >
        <h2>Les catégories ci-dessous détaillent ce savoir-faire</h2>
       </section>
       <section className={styles.listCategorie}>
         <h1>Candidats professionnels</h1>
         <ul className={styles.CategorieContainer}>
         {
         [1,2,3,4,5,6,7,8].map((a,index) =>(
           <li id={index}>
            <section className={styles.categorie}>
              <figure>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjh8FtIDVKI6npdhfevlj-1mXYzIZC71B-IA&s' />
              </figure>
              <h2>Design</h2>
            </section>
           </li>
          ))
         }
         </ul>
       </section>
       <section className={styles.listCategorie}>
         <h1>Les categories les plus recherchées</h1>
         <ul className={styles.CategorieContainer}>
         {
         [1,2].map((a) =>(
           <li id={a}>
            <section className={styles.categorie}>
              <figure>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjh8FtIDVKI6npdhfevlj-1mXYzIZC71B-IA&s' />
              </figure>
              <h2>Design</h2>
            </section>
           </li>
          ))
         }
         </ul>
       </section>
      </main>
    </LayoutPage>
  )
}

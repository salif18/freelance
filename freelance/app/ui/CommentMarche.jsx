import React from 'react'
import styles from '../styles/_comment_ca_marche.module.scss'
function CommentMarche() {
  return (
    <section className={styles.commentMarche} >
       <h1>Comment fonctionne notre plateforme <span className="free">FreeMali ?</span></h1>
      <section className={styles.row}>
        <div className={styles.column}>
          <img
           
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBdX_GMVfQxlanKWwT9ne-aiQnuBT_1tZ-g&usqp=CAU"
            alt=""
          />
          <p>
            Vous etes récruteur ? postez votre projet et expliquez votre besoin
          </p>
        </div>

        <div className={styles.column}>
          <img
            src="https://i0.wp.com/www.weringroup.ma/wp-content/uploads/2023/02/Cr%C3%A9ation-article-100-scaled.jpg?fit=2560%2C2560&ssl=1"
            alt=""
          />
          <p>
            Parcourez les profils dans le blog  puis choisissez celui qui vous
            convient le mieux
          </p>
        </div>

        <div className={styles.column}>
          <img
           
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGF9kQdsN_IKiE4f4Ezje_td2vooo7KFdLww&usqp=CAU"
            alt=""
          />
          <p>
            Servez-vous de l'interface pour discuter et partager vos services
          </p>
        </div>

        <div className={styles.column}>
          <img
           
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuJmswuXRtJhTMI4nvTa9z-g58mBBvqPakA&usqp=CAU"
            alt=""
          />
          <p>
            Vous etes prestataire ? definir votre proffession et gagner des
            recruteurs
          </p>
        </div>
      </section>
    </section>
  )
}

export default CommentMarche

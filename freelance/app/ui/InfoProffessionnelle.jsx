// components/InfosProfessionnelles.js
import Link from "next/link";
import styles from "../styles/_infopers.module.scss"
export default function InfosProfessionnelles({ user, token, logout }) {
    return (
      <section className={styles.infosPersonnelle}>
      {user?.role === "freelancer" 
        && (<section className={styles.left}>
           <div className={styles.infos}>
           <h2>Categorie</h2>
           <input type="text" value={user?.categorie} />
            <h2>Compétences</h2>
            <input type="text" value={user?.skills} />
            <h2>Expériences professionnel</h2>
            <input type="number" value={user?.experience}/>
            <h2>A propos de vous</h2>
            <textarea  value={user?.description} />
            <h2>PortFolio</h2>
            <input type="text" value={user?.portfolio} />
            <h2>Tarif par heure</h2>
            <input type="number" value={user?.hourlyRate} />
            <h2>Notes</h2>
            <p>{user?.rating}</p>
            <h2>Project terminés</h2>
            <p>{user?.completedProjects}</p>
           </div>
         </section>
         )}
         
         {user?.role === "client"
          &&(
          <section className={styles.left}>
           <div className={styles.infos}>
            <h2>Nom de la compagnie</h2>
            <input type="text" value={user?.companyName} />
            <h2>Site web</h2>
            <input type="number" value={user?.website}/>
           
            <h2>Projets</h2>
            <input type="text" value={user?.postedProjects} />
            <h2>Tarif par heure</h2>
            <input type="number" value={user?.budgetRange} />
           </div>
         </section>
         )}
         <section className={styles.rigth}>
                <h2>Disponibilité</h2>
                <p>{user?.accountStatus}</p>
                <h2>Mon cv</h2>
                <p>{user?.monCv}</p>
                <Link href="">Modifier</Link>
                <Link href="">Changer mot de passe</Link>
                {token && <button
                    onClick={logout}>
                    Se deconnecter
                </button>
                }
            </section>
      </section>
    );
  }
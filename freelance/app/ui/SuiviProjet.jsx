// components/SuiviProjet.js
import Link from "next/link";
import styles from "../styles/_infopers.module.scss"
export default function SuiviProjet({user , token ,logout}) {
    return (
      <section className={styles.infosPersonnelle}>
         <section className={styles.left}>
           <div className={styles.infos}>
             <div>
                <p>Aucuns projets</p>
             </div>
             <div>
                <p>Aucuns projets</p>
             </div>
           </div>
         </section>
         <section className={styles.rigth}>
                <h2>Disponibilité</h2>
                <p>{user?.accountStatus}</p>
                <h2>Mon cv</h2>
                <p>{user?.monCV}</p>
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
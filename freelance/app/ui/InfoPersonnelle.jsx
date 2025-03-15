// components/InfosPersonnelles.js
import Link from "next/link";
import styles from "../styles/_infopers.module.scss"
import StripePayementMode from "../transactions/StripePayementMode";
export default function InfosPersonnelles({ user, token, logout }) {

    return (
        <section className={styles.infosPersonnelle}>
            <section className={styles.left} >
                <figure>
                    <img src={user?.profileImage ?? ""} alt="" />
                </figure>
                <div className={styles.infos}>
                    <h2>Prénom & Nom</h2>
                    <p>{user?.fullName}</p>
                    <h2>Numéro</h2>
                    <p>{user?.phone_number}</p>
                    <h2>Email</h2>
                    <p>{user?.email}</p>
                    <h2>Pays</h2>
                    <p>{user?.country}</p>
                    <h2>Ville</h2>
                    <p>{user?.city}</p>
                    <h2>Addresse</h2>
                    <p>{user?.address}</p>
                </div>
            </section>
            <section className={styles.rigth}>
                <h2>Disponibilité</h2>
                <p>{user?.accountStatus}</p>
                <h2>Mon cv</h2>
                <p>{user?.monCv}</p>
                <Link href="">Modifier</Link>
                <Link href="">Changer mot de passe</Link>
                <li><StripePayementMode /></li>
                {token && <button
                    onClick={logout}>
                    Se deconnecter
                </button>
                }
            </section>
        </section>
    );
}
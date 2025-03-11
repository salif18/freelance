"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/_banner.module.scss";
import { AuthContext } from "../context/authProvider";

function Banner() {
  const { user, token } = useContext(AuthContext); // On utilise `user` et `token` du contexte
  const router = useRouter();

  return (
    <section className={styles.falseBackground}>
      <section className={styles.banner}>
        {token ? (
          // Cas où l'utilisateur est connecté
          user?.city == null || user?.profileImage == null ? (
            // Cas où le profil est incomplet (city ou profileImage manquant)
            <>
              <h1>
                Veuillez créer votre profil pour finaliser votre inscription, et
                <br />
                rejoignez notre <span>Plateforme !</span>
              </h1>
              <button
                className={styles.btnCreateProfil}
                onClick={() => router.push("/registre/step2")} // Rediriger vers la page de création de profil
              >
                Créer votre profil
              </button>
            </>
          ) : (
            // Cas où le profil est complet (city et profileImage renseignés)
            <>
              <h1>
                Vous avez besoin d'embaucher ou vous recherchez une embauche en ligne
                ? <br />
                Rejoignez notre <span>Plateforme !</span>
              </h1>
              <h3>Trouvez des professionnels qualifiés pour vos services</h3>
            </>
          )
        ) : (
          // Cas où l'utilisateur n'est pas connecté
          <>
            <h1>
              Vous avez besoin d'embaucher ou vous recherchez une embauche en ligne
              ? <br />
              Rejoignez notre <span>Plateforme !</span>
            </h1>
            <h3>Trouvez des professionnels qualifiés pour vos services</h3>
            <p>Inscrivez-vous !</p>
            <div className={styles.btnContainer}>
              <button
                className={styles.inscriptionPresta}
                onClick={() => router.push("/registre/candidats")}
              >
                Candidat(e)s
              </button>

              <button
                className={styles.inscriptionClient}
                onClick={() => router.push("/registre/recruteurs")}
              >
                Récruteurs
              </button>
            </div>
          </>
        )}
      </section>
    </section>
  );
}

export default Banner;
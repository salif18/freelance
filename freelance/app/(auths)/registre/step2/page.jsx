"use client";

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "../../../styles/_step2.module.scss";
import { AuthContext } from "@/app/context/authProvider";
import LayoutPage from "@/app/layouts/Layout";
import { CiLocationArrow1 } from "react-icons/ci";


const SecondStepForm = () => {
  const router = useRouter();
  const { userId, user, token, login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    profileImage: null,
    skills: [],
    experience: null,
    portfolio: [],
    hourlyRate: null,
    companyName: "",
    website: "",
    budgetRange: "0",
    location: {
      type: "Point",
      coordinates: [0, 0], // [longitude, latitude]
    },
    address: "",
    city: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [geolocationError, setGeolocationError] = useState("");

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fonction pour gérer les changements dans les champs de type tableau
  const handleArrayChange = (e, field) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [field]: value.split(",").map((item) => item.trim()),
    }));
  };

  // Fonction pour activer la géolocalisation
  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      setGeolocationError("La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }

    setGeolocationError(""); // Réinitialiser les erreurs
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prevState) => ({
          ...prevState,
          location: {
            type: "Point",
            coordinates: [longitude, latitude], // [longitude, latitude]
          },
        }));
        setLoading(false);
      },
      (error) => {
        setGeolocationError("Impossible de récupérer votre position. Veuillez activer la géolocalisation.");
        setLoading(false);
      }
    );
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
console.log(formData)
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_URI}/auth/user/${userId}`, formData);

      if (response.status === 200) {
        const { user } = response.data;
        login(user, token, userId);
        router.push("/registre/step2");
      }

      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error.response?.data || error.message);
      setErrors({
        server: error.response?.data?.message || "Une erreur est survenue lors de la mise à jour.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutPage>
      <section className={styles.step}>
        <h1>Complétez votre profil</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Section spécifique au rôle */}
          {user?.role === "freelancer" && (
            <div className={styles.roleSection}>
              <h2>Informations Freelancer</h2>
              {/* Section pour l'image de profil */}
              <section className={styles.colomn}>
                <label htmlFor="profileImage">Image de profil</label>
                <input
                  type="text"
                  id="profileImage"
                  name="profileImage"
                  onChange={handleChange}
                  placeholder="https:// url de l'image"
                />
              </section>
              <section className={styles.colomn}>
                <label htmlFor="skills">Compétences (séparées par des virgules)</label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  placeholder="Ex: React, Node.js, Design"
                  onChange={(e) => handleArrayChange(e, "skills")}
                />
              </section>
              <section className={styles.colomn}>
                <label htmlFor="experience">Années d'expérience</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  placeholder="Ex: 3"
                  onChange={handleChange}
                />
              </section>
              <section className={styles.colomn}>
                <label htmlFor="portfolio">Portfolio (liens séparés par des virgules)</label>
                <input
                  type="text"
                  id="portfolio"
                  name="portfolio"
                  placeholder="Ex: https://projet1.com, https://projet2.com"
                  onChange={(e) => handleArrayChange(e, "portfolio")}
                />
              </section>
              <section className={styles.colomn}>
                <label htmlFor="hourlyRate">Taux horaire ($)</label>
                <input
                  type="number"
                  id="hourlyRate"
                  name="hourlyRate"
                  placeholder="Ex: 50"
                  onChange={handleChange}
                />
              </section>
            </div>
          )}

          {user?.role === "client" && (
            <div className={styles.roleSection}>
              <h2>Informations Client</h2>
              {/* Section pour l'image de profil */}
              <section className={styles.colomn}>
                <label htmlFor="profileImage">Image de profil</label>
                <input
                  type="text"
                  id="profileImage"
                  name="profileImage"
                  onChange={handleChange}
                  placeholder="https://url de l'image"
                />
              </section>
              <section className={styles.colomn}>
                <label htmlFor="companyName">Nom de l'entreprise</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Ex: Ma Société"
                  onChange={handleChange}
                />
              </section>
              <section className={styles.colomn}>
                <label htmlFor="website">Site web</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  placeholder="Ex: https://masociete.com"
                  onChange={handleChange}
                />
              </section>
              <section className={styles.colomn}>
                <label htmlFor="budgetRange">Budget moyen par projet ($)</label>
                <input
                  type="text"
                  id="budgetRange"
                  name="budgetRange"
                  placeholder="Ex: 1000-5000"
                  onChange={handleChange}
                />
              </section>
            </div>
          )}

          {/* Section pour l'adresse */}
          <div className={styles.roleSection}>
            <h2>Localisation</h2>
            <section className={styles.colomn}>
              <label htmlFor="address">Adresse</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Ex: 123 Rue Principale"
                onChange={handleChange}
              />
            </section>
            <section className={styles.colomn}>
              <label htmlFor="city">Ville</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Ex: Paris"
                onChange={handleChange}
              />
            </section>
            <section className={styles.colomn}>
              <label htmlFor="country">Pays</label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Ex: France"
                onChange={handleChange}
              />
            </section>
            {/* Bouton pour activer la géolocalisation */}
            {
              user?.role == "freelance" ?
              <p>Cette action est primordiale si vous ne voulez pas manqué les opportunités de vos alentours </p>
              :
              <p>Cette action est primordiale si vous voulez retrouver les prestataire près de chez vous </p>
            }
            <section className={styles.colomn}>
              <button
                type="button"
                onClick={handleGeolocation}
                className={styles.geolocationButton}
                disabled={loading}
              >
              <CiLocationArrow1 />
                {loading ? "Récupération de la position..." : "Utiliser ma position actuelle"}
              </button>
              {geolocationError && <div className={styles.error}>{geolocationError}</div>}
            </section>
          </div>

          {/* Affichage des erreurs */}
          {errors.server && <div className={styles.error}>{errors.server}</div>}

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Envoi en cours..." : "Enregistrer"}
          </button>
        </form>
      </section>
    </LayoutPage>
  );
};

export default SecondStepForm;
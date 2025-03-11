"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/_auth.module.scss";
import LayoutPage from "@/app/layouts/Layout";
import Link from "next/link";
import { AuthContext } from "@/app/context/authProvider";
import axios from "axios";

const Page = () => {
    const router = useRouter();
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        contacts: "", // Peut être un email ou un numéro de téléphone
        password: "",
    });
    const [errors, setErrors] = useState({
        contacts: "",
        password: "",
        server: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        // Effacer les erreurs lorsqu'un champ est modifié
        setErrors((prevState) => ({
            ...prevState,
            [name]: "",
            server: "",
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { contacts: "", password: "", server: "" };

        if (!formData.contacts.trim()) {
            newErrors.contacts = "Le nom, l'email ou le numéro est requis.";
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = "Le mot de passe est requis.";
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            setLoading(false);
            return; // Arrêter la soumission si le formulaire n'est pas valide
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_URI}/auth/login`, formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status == 200) {
                // Appeler la fonction login du contexte pour mettre à jour l'état d'authentification
                login(response.data.user, response.data.token, response.data.userId);


                // Rediriger l'utilisateur vers le tableau de bord ou une autre page
                router.push("/");
            }
            console.log("Réponse du backend :", response.data);


        } catch (error) {
            console.error("Erreur lors de la connexion :", error.response?.data || error.message);
            setErrors((prevState) => ({
                ...prevState,
                server: error.response?.data?.message || "Une erreur est survenue lors de la connexion.",
            }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <LayoutPage>
            <main className={styles.auth}>
                <section className={styles.rigth}>
                    <h3>Freelance</h3>
                    <p>
                        Connectez-vous et gagnez des relations <br /> dans le cadre de travail sur notre plateforme
                    </p>
                </section>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>Connectez-vous</h1>
                    <section className={styles.row}>
                        <section className={styles.leftContainer}>
                            <section className={styles.colomn}>
                                <label htmlFor="contacts">Nom, email ou numéro</label>
                                <input
                                    type="text"
                                    id="contacts"
                                    name="contacts"
                                    placeholder="Votre nom, email ou numéro"
                                    value={formData.contacts}
                                    onChange={handleChange}
                                />
                                {errors.contacts && <span className={styles.error}>{errors.contacts}</span>}
                            </section>
                            <section className={styles.colomn}>
                                <label htmlFor="password">Mot de passe</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Votre mot de passe"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <span className={styles.error}>{errors.password}</span>}
                            </section>
                        </section>
                        <div className={styles.barreVertical}></div>
                        <section className={styles.rigthContainer}>
                            <section className={styles.colomn}>
                                <figure>
                                    <img
                                        src="https://www.terawork.com/blog/wp-content/uploads/2022/11/become-a-freelancer-with-creatopy-1024x525.png"
                                        alt=""
                                    />
                                </figure>
                            </section>
                        </section>
                    </section>
                    <section className={styles.forget}>
                        <Link href="/reset">Mot de passe oublié ?</Link>
                    </section>
                    {errors.server && <div className={styles.serverError}>{errors.server}</div>}
                    <button type="submit" disabled={loading}>
                        {loading ? "Connexion en cours..." : "Se connecter"}
                    </button>
                    <section className={styles.ask}>
                        <p>
                            Vous n'avez pas de compte ? <Link href="/">Créer un compte</Link>
                        </p>
                    </section>
                </form>
            </main>
        </LayoutPage>
    );
};

export default Page;
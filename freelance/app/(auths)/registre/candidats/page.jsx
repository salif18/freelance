"use client"

import React, { useContext, useState } from 'react';
import styles from "../../../styles/_auth.module.scss";
import LayoutPage from '@/app/layouts/Layout';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/app/context/authProvider';

const Page = () => {
    const { login } = useContext(AuthContext);
    const router = useRouter()
    const [formData, setFormData] = useState({
        fullName: '',
        phone_number: '',
        email: '',
        role:'freelancer',
        password: ''
    });

    const [errors, setErrors] = useState({
        fullName: '',
        phone_number: '',
        email: '',
        password: '',
        server: '' // Pour les erreurs venant du serveur
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
            role: prevState.role // S'assurer que le rôle reste "client"
        }));
        // Effacer l'erreur du champ lorsqu'il est modifié
        setErrors(prevState => ({
            ...prevState,
            [name]: '',
            server: '' // Effacer également l'erreur serveur
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { fullName: '', phone_number: '', email: '', password: '', server: '' };

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Le nom complet est requis.';
            isValid = false;
        }
        if (!formData.phone_number.trim()) {
            newErrors.phone_number = 'Le numéro de téléphone est requis.';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'L\'email n\'est pas valide.';
            isValid = false;
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Le mot de passe est requis.';
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Arrêter la soumission si le formulaire n'est pas valide
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_URI}/auth/registre`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.status == 201){
                const {token , userId , user } = response.data
                login( user, token , userId);
                router.push("/registre/step2")
              }
            console.log('Success:', response.data);
            // Rediriger l'utilisateur ou afficher un message de succès
            alert('Inscription réussie !');
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                // Gérer les erreurs venant du serveur
                setErrors(prevState => ({
                    ...prevState,
                    server: error.response.data.message || 'Une erreur est survenue lors de l\'inscription.'
                }));
            } else {
                setErrors(prevState => ({
                    ...prevState,
                    server: 'Une erreur est survenue lors de la connexion au serveur.'
                }));
            }
        }
    };

    return (
        <LayoutPage>
            <main className={styles.auth}>
                <section className={styles.rigth}>
                    <h3>Vous etes à la recherche d'une embauche</h3>
                    <p>
                        Bienvenue sur notre <span className="plate">plateforme</span>, un service qui permet de vous mettre
                        en contact avec les recruteurs ou les entreprises à l'aide d'un seul bouton
                    </p>
                    <p>Créer votre compte et trouver vos embaucheurs.</p>

                    <figure>
                        <img src="https://www.terawork.com/blog/wp-content/uploads/2022/11/become-a-freelancer-with-creatopy-1024x525.png" alt='' />
                    </figure>
                </section>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>Inscrivez-vous</h1>
                    
                    <section className={styles.row}>
                        <section className={styles.leftContainer}>
                            <section className={styles.colomn}>
                                <label htmlFor='nom'>Nom complet</label>
                                <input type="text" id='nom' name="fullName" placeholder='Votre nom' value={formData.fullName} onChange={handleChange} />
                                {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
                            </section>
                            <section className={styles.colomn}>
                                <label htmlFor='numero'>Numéro</label>
                                <input type="tel" id='numero' name="phone_number" placeholder='Votre numéro' value={formData.phone_number} onChange={handleChange} />
                                {errors.phone_number && <span className={styles.error}>{errors.phone_number}</span>}
                            </section>
                        </section>
                        <div className={styles.barreVertical}></div>
                        <section className={styles.rigthContainer}>                           
                            <section className={styles.colomn}>
                                <label htmlFor='email'>Email</label>
                                <input type="email" id='email' name="email" placeholder='Votre email' value={formData.email} onChange={handleChange} />
                                {errors.email && <span className={styles.error}>{errors.email}</span>}
                            </section>
                            <section className={styles.colomn}>
                                <label htmlFor='password'>Mot de passe</label>
                                <input type="password" id='password' name="password" placeholder='Votre mot de passe' value={formData.password} onChange={handleChange} />
                                {errors.password && <span className={styles.error}>{errors.password}</span>}
                            </section>
                        </section>
                    </section>
                    <section className={styles.politique}>
                        <p>En s'inscrivant j'accepte <span>les Conditions d'utilisation et</span><br /><span>les politiques de confidentialité</span> </p>
                    </section>
                    {errors.server && <div className={styles.serverError}>{errors.server}</div>}
                    <button type='submit'>S'inscrire</button>
                </form>
            </main>
        </LayoutPage>
    );
};

export default Page;
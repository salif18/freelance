"use client";

import { useState } from "react";
import axios from "axios";
import styles from "../../styles/_depot.module.scss"; // Importez le module SCSS
import LayoutPage from "@/app/layouts/Layout";

export default function Deposit() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleDeposit = async () => {
        if (!phoneNumber || !amount) {
            setMessage("Veuillez remplir tous les champs.");
            return;
        }

        if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
            setMessage("Veuillez entrer un montant valide.");
            return;
        }

        setIsLoading(true);
        setMessage("");

        try {
            const userId = "123456"; // Remplacez par l'ID de l'utilisateur connecté
            const response = await axios.post(`${process.env.NEXT_PUBLIC_URI}/checkout-orange/deposit`, {
                userId,
                phoneNumber,
                amount: parseFloat(amount),
                description: "Dépôt initial"
            });

            setMessage(`Dépôt réussi : ${response.data.message}`);
        } catch (error) {
            setMessage(`Erreur lors du dépôt : ${error.response?.data?.message || error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <LayoutPage>
        <main className={styles.body}>
        <section className={styles.depot}>
            <h1 className={styles.title}>Dépôt d'argent</h1>

            <section className={styles.formGroup}>
                <label className={styles.label} htmlFor="phoneNumber">
                    Numéro de téléphone
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    placeholder="Entrez votre numéro de téléphone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={styles.input}
                />
            </section>

            <section className={styles.formGroup}>
                <label className={styles.label} htmlFor="amount">
                    Montant
                </label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Entrez le montant"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={styles.input}
                />
            </section>

            <button
                onClick={handleDeposit}
                disabled={isLoading}
                className={styles.button}
            >
                {isLoading ? "Traitement en cours..." : "Déposer"}
            </button>

            {message && (
                <p
                    className={`${styles.message} ${
                        message.includes("réussi") ? styles.success : styles.error
                    }`}
                >
                    {message}
                </p>
            )}
        </section>
        </main>
        </LayoutPage>
    );
}
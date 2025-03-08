"use client";

import { useState } from "react";
import axios from "axios";
import styles from "../../styles/_transfert.module.scss"; // Importez le module SCSS
import LayoutPage from "@/app/layouts/Layout";

export default function Transfer() {
    const [recipientPhoneNumber, setRecipientPhoneNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleTransfer = async () => {
        if (!recipientPhoneNumber || !amount) {
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
            const senderId = "123456"; // Remplacez par l'ID de l'utilisateur connecté
            const response = await axios.post(`${process.env.NEXT_PUBLIC_URI}/checkout-orange/transfert`, {
                senderId,
                recipientPhoneNumber,
                amount: parseFloat(amount),
                description: "Transfert avec commission"
            });

            setMessage(`Transfert réussi : ${response.data.message}`);
        } catch (error) {
            setMessage(`Erreur lors du transfert : ${error.response?.data?.message || error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <LayoutPage>
        <main className={styles.transfert}>
        <div className={styles.container}>
            <h1 className={styles.title}>Transfert d'argent</h1>

            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="recipientPhoneNumber">
                    Numéro du destinataire
                </label>
                <input
                    type="text"
                    id="recipientPhoneNumber"
                    placeholder="Entrez le numéro du destinataire"
                    value={recipientPhoneNumber}
                    onChange={(e) => setRecipientPhoneNumber(e.target.value)}
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
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
            </div>

            <button
                onClick={handleTransfer}
                disabled={isLoading}
                className={styles.button}
            >
                {isLoading ? "Traitement en cours..." : "Transférer"}
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
        </div>
        </main>
        </LayoutPage>
    );
}
"use client";

import { useState } from "react";
import axios from "axios";

export default function Payment() {
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    const handlePayment = async () => {
        try {
            const userId = "123456"; // Remplacez par l'ID de l'utilisateur connecté
            const response = await axios.post(`${process.env.NEXT_PUBLIC_URI}/checkout-orange/abonnement`, {
                userId,
                amount: parseFloat(amount),
                description: "Paiement pour un abonnement"
            });

            setMessage(`Paiement réussi : ${response.data.message}`);
        } catch (error) {
            setMessage(`Erreur lors du paiement : ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div>
            <h1>Paiement marchand</h1>
            <input
                type="number"
                placeholder="Montant"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handlePayment}>Payer</button>
            {message && <p>{message}</p>}
        </div>
    );
}
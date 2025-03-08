"use client";

import { useState } from "react";
import axios from "axios";

export default function PayementPrestataire() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    setLoading(true);
    setMessage("");

    try {

      const res = await axios.post(`${process.env.NEXT_PUBLIC_URI}/checkout-orange/transfert`, {
        phoneNumber:phoneNumber,
        amount:amount,
      });

      if (res.data.success) {
        setMessage("Paiement en attente. Vérifiez votre téléphone.");
        console.log(error)
      } else {
        setMessage("Échec du paiement.");
      }
    } catch (error) {
      console.error("Erreur lors du paiement :", error);
      console.log(error)
      setMessage("Erreur lors du paiement. Vérifiez votre connexion.");
    }

    setLoading(false);
  };
  return (
    <section>
    <h2>Paiement Orange Money</h2>
    <input
      type="text"
      placeholder="Numéro du destinateur"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
    />
    <input
      type="number"
      placeholder="Montant à saisir"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />
    <button onClick={handlePayment} disabled={loading}>
      {loading ? "Traitement..." : "Payer"}
    </button>
    {message && <p>{message}</p>}
  </section>
  )
}

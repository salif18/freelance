"use client";

import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

export default function PaypalCheckout() {
  const [orderID, setOrderID] = useState(null);

  // 🔹 Créer une commande PayPal
  const createOrder = async () => {
    try {
      const res = await axios.post("http://localhost:3002/checkout-paypal/create-paypal-order", {
        amount: 100,
        currency: "USD",
      });
      setOrderID(res.data.id);
      return res.data.id;  // 🔥 Retourne l'ID de commande
    } catch (error) {
      console.log("Erreur de commande PayPal", error);
      return null; // 🔥 Empêche une erreur si la requête échoue
    }
  };

  // 🔹 Capturer le paiement
  const captureOrder = async (orderID) => {
    try {
      const res = await axios.post(`http://localhost:3002/checkout-paypal/capture-paypal-order/${orderID}`);
      console.log("Paiement réussi :", res.data);
    } catch (error) {
      console.log("Erreur de capture PayPal", error);
    }
  };

  return (
    <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_KEY }}>
      <PayPalButtons createOrder={createOrder} onApprove={(data) => captureOrder(data.orderID)} />
    </PayPalScriptProvider>
  );
}

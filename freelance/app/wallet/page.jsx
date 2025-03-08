"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/_wallet.module.scss";
import TransactionList from "../components/TransactionList";
import LayoutPage from "../layouts/Layout";
import Link from "next/link";
import { IoWalletOutline } from "react-icons/io5";

export default function Wallet() {
    const [balance, setBalance] = useState(15000);
    const [transactions, setTransactions] = useState([
        {
            _id: "60d5ec49f1b2c72d88f8e8e5",
            userId: "60d5ec49f1b2c72d88f8e8e5",
            type: "dépot",
            amount: 10000,
            description: "Dépôt initial",
            createdAt: "2023-10-01T12:00:00.000Z",
        },
        {
            _id: "60d5ec49f1b2c72d88f8e8e6",
            userId: "60d5ec49f1b2c72d88f8e8e5",
            type: "retrait",
            amount: 5000,
            description: "Retrait pour projet X",
            createdAt: "2023-10-02T14:30:00.000Z",
        },
    ]);

    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    // useEffect(() => {
    //     const fetchWalletData = async () => {
    //         try {
    //             const userId = "123456"; // Remplacez par l'ID de l'utilisateur connecté
    //             const balanceResponse = await axios.get(`${process.env.NEXT_PUBLIC_URI}/checkout-orange/solde/${userId}`);
    //             const transactionsResponse = await axios.get(`${process.env.NEXT_PUBLIC_URI}/checkout-orange/transactions/${userId}`);

    //             setBalance(balanceResponse.data.solde);
    //             setTransactions(transactionsResponse.data.transactions);
    //             setLoading(false);
    //         } catch (error) {
    //             setError("Erreur lors de la récupération des données");
    //             setLoading(false);
    //         }
    //     };

    //     fetchWalletData();
    // }, []);

    // if (loading) {
    //     return <div>Chargement en cours...</div>;
    // }

    // if (error) {
    //     return <div>{error}</div>;
    // }

    return (
        <LayoutPage>
        <main className={styles.main}>
            <section className={styles.wallet}>
                <h1>Mon Portefeuille <IoWalletOutline/></h1>
                <section className={styles.balance}>
                    <h2>Solde actuel</h2>
                    <p>{balance} XOF</p>
                </section>
                <nav>
                    <ul>
                        <li>
                            <Link href="/wallet/depot">Dépot</Link>
                        </li>
                        <li>
                            <Link href="/wallet/retrait">Retrait</Link>
                        </li>
                    </ul>
                </nav>
                <section className={styles.transactions}>
                    <h2>Historique des transactions</h2>
                    <TransactionList transactions={transactions} />
                </section>
            </section>
            </main>
        </LayoutPage>
    );
}
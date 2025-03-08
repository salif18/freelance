"use client";

import styles from "../styles/_wallet.module.scss";

export default function TransactionList({ transactions }) {
    if (transactions.length === 0) {
        return <p>Aucune transaction disponible.</p>;
    }

    return (
        <ul className={styles.transactionList}>
            {transactions.map((transaction) => (
                <li key={transaction._id} className={styles.transactionItem}>
                    <div className={styles.transactionDetails}>
                        <p className={styles.transactionType}><strong>Type :</strong> {transaction.type}</p>
                        <p className={styles.transactionAmount}><strong>Montant :</strong> {transaction.amount} XOF</p>
                        <p className={styles.transactionDescription}><strong>Description :</strong> {transaction.description}</p>
                        <p className={styles.transactionDate}><strong>Date :</strong> {new Date(transaction.createdAt).toLocaleString()}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
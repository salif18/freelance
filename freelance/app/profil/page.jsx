"use client";

import React, { useContext } from 'react'
import LayoutPage from '../layouts/Layout'
import styles from "../styles/_profil.module.scss"
import Link from 'next/link';
import Tabs from '../ui/Tabs';
import InfosPersonnelles from '../ui/InfoPersonnelle';
import InfosProfessionnelles from '../ui/InfoProffessionnelle';
import SuiviProjet from '../ui/SuiviProjet';
import Wallet from '../ui/Wallet';
import { AuthContext } from '../context/authProvider';

function page() {
  const { user, token , logout } = useContext(AuthContext)
  // Définir les onglets et leur contenu
  const tabs = [
    {
      label: 'Infos Personnelles',
      content: <InfosPersonnelles user={user} token={token} logout={logout} />,
    },
    {
      label: 'Infos Professionnelles',
      content: <InfosProfessionnelles user={user} token={token} logout={logout} />,
    },
    {
      label: 'Suivi de Projet',
      content: <SuiviProjet user={user} token={token} logout={logout} />,
    },
    {
      label: 'Portefeuille',
      content: <Wallet />,
    },
  ];
  return (
    <LayoutPage>
    <main className={styles.profil}>
      <h1>{user?.fullName}</h1>
      <Tabs tabs={tabs}  />
    </main>
    </LayoutPage>
  )
}

export default page

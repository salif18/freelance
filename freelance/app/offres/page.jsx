import React from 'react'
import OffreForm from '../ui/OffreForm';
import styles from "../styles/_offreForm.module.scss"
import LayoutPage from '../layouts/Layout';

function page() {
  return (
    <LayoutPage>
      <main className={styles.offres}>
        <OffreForm />
      </main>
    </LayoutPage>
  )
}

export default page

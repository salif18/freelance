"use client"

import styles from "./styles/page.module.scss";
import LayoutPage from "./layouts/Layout";
import Banner from "./ui/Banner";
import QuelquesPrestataires from "./ui/QuelquesPrestataires";
import QuelquesOffres from "./ui/QuelquesOffres";
import CommentMarche from "./ui/CommentMarche";
import Newsletter from "./ui/Newsletter";

export default function Home() {
  return (
    <LayoutPage>
      <main className={styles.home}>
        <Banner/>
        <QuelquesPrestataires/>
        <QuelquesOffres/>
        <CommentMarche/>
        <Newsletter/>
      </main>
    </LayoutPage>
  );
}

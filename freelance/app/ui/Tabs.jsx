import { useState } from 'react';
import styles from '../styles/_profil.module.scss'; // Importer les styles SCSS

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.profil}>
      <nav className={styles.nav}>
        {/* Barre d'onglets */}
        <ul className={styles.tabList}>
          {tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${styles.tabItem} ${
                activeTab === index ? styles.active : ''
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>

        {/* Contenu des onglets */}
        <div className={styles.tabContent}>
          {tabs[activeTab].content}
        </div>
      </nav>
    </div>
  );
}
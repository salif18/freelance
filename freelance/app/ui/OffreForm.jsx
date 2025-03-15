import styles from '../styles/_offreForm.module.scss';

export default function OffreForm() {
  return (
    <div className={styles.offreContainer}>
      <h1 className={styles.title}>Poster une Offre</h1>
      <form className={styles.form}>
        {/* Titre de l'offre */}
        <div className={styles.formGroup}>
          <label htmlFor="titre" className={styles.label}>
            Titre de l'offre
          </label>
          <input
            type="text"
            id="titre"
            name="titre"
            className={styles.input}
            placeholder="Ex: Développeur Full Stack"
            required
          />
        </div>

        {/* Description de l'offre */}
        <div className={styles.formGroup}>
          <label htmlFor="categorie" className={styles.label}>
            Catégorie
          </label>
          <input
            id="categorie"
            name="categorie"
            className={styles.input}
            placeholder="Choisir une categorie..."
          
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="competences" className={styles.label}>
            Compétences
          </label>
          <input
            type="text"
            id="competences"
            name="competences"
            className={styles.input}
            placeholder="Ex: Développeur Full Stack"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className={styles.textarea}
            placeholder="Décrivez l'offre en détail..."
            rows="5"
            required
          />
        </div>

        {/* Type de contrat */}
        <div className={styles.formGroup}>
          <label htmlFor="contrat" className={styles.label}>
            Type de contrat
          </label>
          <select id="contrat" name="contrat" className={styles.select} required>
            <option value="">Sélectionnez un type de contrat</option>
            <option value="CDI">CDI</option>
            <option value="CDD">CDD</option>
            <option value="Freelance">Freelance</option>
            <option value="Stage">Stage</option>
          </select>
        </div>

        {/* Localisation */}
        <div className={styles.formGroup}>
          <label htmlFor="localisation" className={styles.label}>
            Localisation
          </label>
          <input
            type="text"
            id="localisation"
            name="localisation"
            className={styles.input}
            placeholder="Ex: Paris, France"
            required
          />
        </div>

        {/* Salaire */}
        <div className={styles.formGroup}>
          <label htmlFor="salaire" className={styles.label}>
            Salaire (optionnel)
          </label>
          <input
            type="text"
            id="salaire"
            name="salaire"
            className={styles.input}
            placeholder="Ex: 40k - 50k €"
          />
        </div>

        {/* Bouton de soumission */}
        <button type="submit" className={styles.submitButton}>
          Publier l'offre
        </button>
      </form>
    </div>
  );
}
import PageHeader from '../components/PageHeader';
import SkillGroup from '../components/SkillGroup';
import { languages, skillGroups } from '../data/skills';
import styles from './HabilidadesPage.module.css';

export default function HabilidadesPage() {
  return (
    <div className={styles.page}>
      <PageHeader
        command="grep -r skills/"
        title="Habilidades"
        subtitle="O inventário de tecnologias e ferramentas que já usei em algum projeto real."
      />

      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <SkillGroup key={group.id} group={group} />
        ))}
      </div>

      <div className={styles.languages}>
        <p className={styles.languagesLabel}>Linguagens estudadas</p>
        <ul className={styles.languagesList}>
          {languages.map((lingua) => (
            <li key={lingua} className={styles.languageTag}>
              {lingua}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

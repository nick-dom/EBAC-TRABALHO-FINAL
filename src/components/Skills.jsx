import { languages, skillGroups } from '../data/skills';
import Section from './Section';
import SkillGroup from './SkillGroup';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <Section id="habilidades" command="grep -r skills/" title="Habilidades">
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
    </Section>
  );
}

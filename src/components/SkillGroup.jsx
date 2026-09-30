import styles from './SkillGroup.module.css';

/**
 * @param {{ group: import('../data/skills').skillGroups[number] }} props
 */
export default function SkillGroup({ group }) {
  return (
    <div className={styles.group}>
      <p className={styles.command}>
        <span className={styles.prompt}>$</span> {group.command}
      </p>
      <h3 className={styles.title}>{group.title}</h3>
      <ul className={styles.items}>
        {group.items.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

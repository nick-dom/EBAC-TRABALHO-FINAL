import { ExternalLinkIcon, GithubIcon } from './icons';
import styles from './ProjectCard.module.css';

/**
 * Card de projeto com aparência de janela de terminal/editor — cada
 * card é um "arquivo" (`~/projetos/<slug>`), não um card de SaaS
 * genérico. `accent` (definido nos dados) escolhe qual das duas cores
 * de destaque o card usa, para os projetos não ficarem todos iguais.
 *
 * @param {{ project: import('../data/projects').projects[number] }} props
 */
export default function ProjectCard({ project }) {
  const corDestaque = project.accent === 'teal' ? styles.acentoTeal : styles.acentoAmbar;

  return (
    <article className={`${styles.card} ${corDestaque}`}>
      <div className={styles.fileBar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.filePath}>~/projetos/{project.slug}</span>
      </div>

      <div className={styles.body}>
        <span className={styles.statusBadge}>✓ Missão concluída</span>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.description}>{project.description}</p>
        <p className={styles.highlight}>{project.highlight}</p>

        <ul className={styles.stackList} aria-label="Tecnologias usadas">
          {project.stack.map((tech) => (
            <li key={tech} className={styles.stackTag}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a href={project.repo} target="_blank" rel="noreferrer" className={styles.linkButton}>
            <GithubIcon size={16} />
            Código
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className={`${styles.linkButton} ${styles.linkButtonPrimary}`}
            >
              <ExternalLinkIcon size={15} />
              Ver demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

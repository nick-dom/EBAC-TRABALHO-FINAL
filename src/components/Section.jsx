import styles from './Section.module.css';

/**
 * Envelope reutilizável para cada seção da página. O cabeçalho usa um
 * "comando de terminal" que descreve semanticamente o que a seção faz
 * (ex: `cat sobre.md` para uma seção que exibe um texto, `ls
 * projetos/` para uma que lista itens) em vez de um rótulo decorativo.
 *
 * @param {{ id: string, command: string, title: string, children: React.ReactNode }} props
 */
export default function Section({ id, command, title, children }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.command} aria-hidden="true">
            <span className={styles.prompt}>$</span> {command}
          </p>
          <h2 id={`${id}-heading`} className={styles.title}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

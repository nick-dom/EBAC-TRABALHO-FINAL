import styles from './PageHeader.module.css';

/**
 * Cabeçalho padrão de cada página/"nível" do jogo. Mantém o estilo de
 * comando de terminal (`$ comando`) que já era usado na versão single
 * page, agora no topo de cada rota.
 *
 * @param {{ command: string, title: string, subtitle?: string }} props
 */
export default function PageHeader({ command, title, subtitle }) {
  return (
    <div className={styles.header}>
      <p className={styles.command} aria-hidden="true">
        <span className={styles.prompt}>$</span> {command}
      </p>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

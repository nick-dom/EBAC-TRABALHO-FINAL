import { profile } from '../data/profile';
import { useTypedTerminal } from '../hooks/useTypedTerminal';
import styles from './Hero.module.css';

const LINHAS_TERMINAL = [
  { text: '$ whoami', tipo: 'comando' },
  { text: `${profile.handle} — ${profile.name.toLowerCase()}`, tipo: 'saida' },
  { text: '$ cat status.txt', tipo: 'comando' },
  { text: 'disponível para oportunidades em front-end', tipo: 'saida' },
];

export default function Hero() {
  const { reveladas, concluido } = useTypedTerminal(LINHAS_TERMINAL, 22);

  return (
    <div id="topo" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.tagline}>
            {profile.role} na {profile.institution}.
          </p>
          <p className={styles.summary}>
            Desenvolvo aplicações web com React e Next.js, e estudo o outro lado do sistema —
            servidores, redes e segurança — para construir interfaces que não são só bonitas, mas
            também bem-feitas por baixo do capô.
          </p>
          <div className={styles.ctaRow}>
            <a href="#projetos" className={styles.btnPrimary}>
              Ver projetos
            </a>
            <a href="#contato" className={styles.btnGhost}>
              Falar comigo
            </a>
          </div>
        </div>

        <div className={styles.terminal} aria-hidden="true">
          <div className={styles.terminalBar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.terminalPath}>~/{profile.handle} — status</span>
          </div>
          <div className={styles.terminalBody}>
            {LINHAS_TERMINAL.map((linha, indice) => (
              <p
                key={linha.text}
                className={linha.tipo === 'comando' ? styles.linhaComando : styles.linhaSaida}
              >
                {reveladas[indice]}
              </p>
            ))}
            <span className={concluido ? styles.cursorParado : styles.cursor} />
          </div>
        </div>
      </div>
    </div>
  );
}

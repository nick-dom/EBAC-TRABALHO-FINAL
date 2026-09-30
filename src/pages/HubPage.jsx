import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import { profile } from '../data/profile';
import { asset } from '../utils/asset';
import styles from './HubPage.module.css';

const prefereMovimentoReduzido = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const NIVEIS = [
  {
    numero: '01',
    to: '/sobre',
    titulo: 'Sobre mim',
    descricao: 'Quem sou, o que estudo e onde.',
  },
  {
    numero: '02',
    to: '/projetos',
    titulo: 'Projetos',
    descricao: '7 missões concluídas no curso.',
  },
  {
    numero: '03',
    to: '/habilidades',
    titulo: 'Habilidades',
    descricao: 'Stack e ferramentas dominadas.',
  },
  {
    numero: '04',
    to: '/contato',
    titulo: 'Contato',
    descricao: 'Fale comigo por e-mail ou WhatsApp.',
  },
];

export default function HubPage() {
  const [progresso, setProgresso] = useState(prefereMovimentoReduzido() ? 100 : 0);
  const carregado = progresso >= 100;

  useEffect(() => {
    if (prefereMovimentoReduzido()) return undefined;

    const intervalo = window.setInterval(() => {
      setProgresso((atual) => {
        if (atual >= 100) {
          window.clearInterval(intervalo);
          return 100;
        }
        return Math.min(100, atual + Math.round(6 + Math.random() * 14));
      });
    }, 90);

    return () => window.clearInterval(intervalo);
  }, []);

  if (!carregado) {
    return (
      <div className={styles.loading} role="status" aria-live="polite">
        <img src={asset('/img/logo-huskyn.webp')} alt="HUSKYN" className={styles.loadingLogo} />
        <div className={styles.loadingBarTrack}>
          <div className={styles.loadingBarFill} style={{ width: `${progresso}%` }} />
        </div>
        <p className={styles.loadingLabel}>carregando portfólio... {progresso}%</p>
      </div>
    );
  }

  return (
    <div className={styles.hub}>
      <section className={styles.title}>
        <img src={asset('/img/logo-huskyn.webp')} alt="HUSKYN" className={styles.wordmark} />
        <img
          src={asset('/img/emblema-lobo.webp')}
          alt=""
          aria-hidden="true"
          className={styles.emblemWatermark}
        />

        <Avatar size="lg" />

        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.tagline}>
          {profile.role} · {profile.institution}
        </p>
        <p className={styles.summary}>
          Desenvolvo aplicações web com React e Next.js, e estudo o outro lado do sistema —
          servidores, redes e segurança — para construir interfaces que não são só bonitas, mas
          bem-feitas por baixo do capô.
        </p>
      </section>

      <section className={styles.menu} aria-label="Selecione uma seção">
        <p className={styles.menuLabel}>selecione uma seção</p>
        <div className={styles.grid}>
          {NIVEIS.map((nivel) => (
            <Link key={nivel.to} to={nivel.to} className={styles.card}>
              <span className={styles.cardNumber}>{nivel.numero}</span>
              <span className={styles.cardTitle}>{nivel.titulo}</span>
              <span className={styles.cardDesc}>{nivel.descricao}</span>
              <span className={styles.cardArrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

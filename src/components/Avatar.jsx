import { asset } from '../utils/asset';
import styles from './Avatar.module.css';

/**
 * Avatar com foto real, moldura estilo HUD de jogo (anel de energia +
 * cantos de mira) e um indicador de "status".
 *
 * @param {{ size?: 'md' | 'lg', status?: string }} props
 */
export default function Avatar({ size = 'md', status = 'disponível' }) {
  return (
    <div className={`${styles.wrapper} ${size === 'lg' ? styles.lg : ''}`}>
      <div className={styles.frame}>
        <span className={styles.corner} data-pos="tl" aria-hidden="true" />
        <span className={styles.corner} data-pos="tr" aria-hidden="true" />
        <span className={styles.corner} data-pos="bl" aria-hidden="true" />
        <span className={styles.corner} data-pos="br" aria-hidden="true" />
        <img
          src={asset('/img/avatar.webp')}
          alt="Foto de Dominick Neri dos Santos"
          className={styles.photo}
        />
      </div>
      {status && (
        <span className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          {status}
        </span>
      )}
    </div>
  );
}

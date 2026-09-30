import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { ArrowUpIcon } from './icons';
import styles from './Footer.module.css';

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>
          {profile.name} · {ano}
        </p>
        <Link to="/" className={styles.top}>
          <ArrowUpIcon size={16} />
          voltar ao menu
        </Link>
      </div>
    </footer>
  );
}

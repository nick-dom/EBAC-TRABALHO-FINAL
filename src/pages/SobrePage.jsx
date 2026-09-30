import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import PageHeader from '../components/PageHeader';
import { GithubIcon, MailIcon } from '../components/icons';
import { profile } from '../data/profile';
import styles from './SobrePage.module.css';

export default function SobrePage() {
  return (
    <div className={styles.page}>
      <PageHeader command="cat sobre.md" title="Sobre mim" />

      <div className={styles.layout}>
        <Avatar />

        <div className={styles.content}>
          {profile.bio.map((paragrafo) => (
            <p key={paragrafo.slice(0, 24)} className={styles.paragrafo}>
              {paragrafo}
            </p>
          ))}

          <ul className={styles.focusList} aria-label="Áreas de foco">
            {profile.focusAreas.map((area) => (
              <li key={area} className={styles.focusTag}>
                {area}
              </li>
            ))}
          </ul>

          <div className={styles.quickLinks}>
            <a href={`mailto:${profile.email}`} className={styles.quickLink}>
              <MailIcon size={16} />
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={styles.quickLink}>
              <GithubIcon size={16} />
              github.com/nick-dom
            </a>
          </div>

          <Link to="/projetos" className={styles.cta}>
            Ver meus projetos →
          </Link>
        </div>
      </div>
    </div>
  );
}

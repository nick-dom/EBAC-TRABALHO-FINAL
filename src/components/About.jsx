import { profile } from '../data/profile';
import Avatar from './Avatar';
import Section from './Section';
import { GithubIcon, MailIcon } from './icons';
import styles from './About.module.css';

export default function About() {
  return (
    <Section id="sobre" command="cat sobre.md" title="Sobre mim">
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
        </div>
      </div>
    </Section>
  );
}

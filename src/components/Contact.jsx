import { profile } from '../data/profile';
import ContactForm from './ContactForm';
import CopyEmailButton from './CopyEmailButton';
import Section from './Section';
import { GithubIcon, MailIcon } from './icons';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <Section id="contato" command="mail contato" title="Vamos conversar">
      <div className={styles.layout}>
        <div className={styles.info}>
          <p className={styles.text}>
            Estou aberto a oportunidades de estágio ou trainee em front-end. Pode mandar uma
            mensagem por aqui ou direto pelos canais abaixo.
          </p>

          <ul className={styles.channels}>
            <li>
              <a href={`mailto:${profile.email}`} className={styles.channelLink}>
                <MailIcon size={18} />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className={styles.channelLink}
              >
                <GithubIcon size={18} />
                github.com/nick-dom
              </a>
            </li>
          </ul>

          <CopyEmailButton email={profile.email} />
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}

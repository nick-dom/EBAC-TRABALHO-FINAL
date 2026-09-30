import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import CopyEmailButton from '../components/CopyEmailButton';
import { profile } from '../data/profile';
import { asset } from '../utils/asset';
import styles from './ContatoPage.module.css';

export default function ContatoPage() {
  const linkWhatsapp = `https://wa.me/${profile.whatsapp}`;

  return (
    <div className={styles.page}>
      <PageHeader
        command="mail contato"
        title="Vamos conversar"
        subtitle="Estou aberto a oportunidades de estágio ou trainee em front-end."
      />

      <div className={styles.channels}>
        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noreferrer"
          className={`${styles.channelCard} ${styles.whatsapp}`}
        >
          <img
            src={asset('/img/whatsapp-pixel.png')}
            alt=""
            aria-hidden="true"
            className={styles.pixelIcon}
          />
          <span className={styles.channelInfo}>
            <span className={styles.channelLabel}>WhatsApp</span>
            <span className={styles.channelValue}>{profile.whatsappDisplay}</span>
          </span>
        </a>

        <a href={`mailto:${profile.email}`} className={`${styles.channelCard} ${styles.gmail}`}>
          <img
            src={asset('/img/gmail-pixel.png')}
            alt=""
            aria-hidden="true"
            className={styles.pixelIcon}
          />
          <span className={styles.channelInfo}>
            <span className={styles.channelLabel}>E-mail</span>
            <span className={styles.channelValue}>{profile.email}</span>
          </span>
        </a>
      </div>

      <div className={styles.copyRow}>
        <CopyEmailButton email={profile.email} />
      </div>

      <div className={styles.formSection}>
        <p className={styles.formLabel}>ou preencha o formulário</p>
        <ContactForm />
      </div>
    </div>
  );
}

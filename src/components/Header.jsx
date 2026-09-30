import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { asset } from '../utils/asset';
import ThemeToggle from './ThemeToggle';
import { CloseIcon, MenuIcon } from './icons';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { to: '/sobre', label: 'sobre' },
  { to: '/projetos', label: 'projetos' },
  { to: '/habilidades', label: 'habilidades' },
  { to: '/contato', label: 'contato' },
];

function linkClass({ isActive }) {
  return isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
}

function linkClassMobile({ isActive }) {
  return isActive ? `${styles.navLinkMobile} ${styles.navLinkMobileActive}` : styles.navLinkMobile;
}

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.brand} aria-label="Ir para o menu principal">
          <img
            src={asset('/img/emblema-lobo.webp')}
            alt=""
            aria-hidden="true"
            className={styles.brandEmblem}
          />
          <span className={styles.brandText}>huskyn</span>
        </Link>

        <nav className={styles.navDesktop} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClass}>
                  /{item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuAberto((aberto) => !aberto)}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            data-testid="menu-toggle"
          >
            {menuAberto ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {menuAberto && (
        <nav id="menu-mobile" className={styles.navMobile} aria-label="Navegação mobile">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={linkClassMobile}
                  onClick={() => setMenuAberto(false)}
                >
                  ~/{item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

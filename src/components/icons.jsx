/**
 * Ícones em SVG puro, desenhados à mão — evita adicionar uma
 * biblioteca de ícones inteira só para uns 10 símbolos pequenos.
 * Todos aceitam `size` e demais props (className, aria-hidden) via
 * spread, e usam `stroke="currentColor"` para herdar a cor do texto
 * ao redor.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function GithubIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.28.98 11.6c0 5.06 3.29 9.36 7.86 10.88.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.5 3.17-1.18 3.17-1.18.64 1.6.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.18v3.23c0 .3.2.66.79.55 4.57-1.53 7.86-5.82 7.86-10.88C23.02 5.28 18.27.5 12 .5z" />
    </svg>
  );
}

export function MailIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6 8 6.5L19.5 6" />
    </svg>
  );
}

export function ExternalLinkIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <path d="M14 4h6v6" />
      <path d="M20 4 10.5 13.5" />
      <path d="M18 13.5V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V7.5A1.5 1.5 0 0 1 5 6h5.5" />
    </svg>
  );
}

export function CopyIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <rect x="9" y="9" width="11.5" height="11.5" rx="1.75" />
      <path d="M14.5 9V4.75A1.75 1.75 0 0 0 12.75 3H4.75A1.75 1.75 0 0 0 3 4.75v8A1.75 1.75 0 0 0 4.75 14.5H9" />
    </svg>
  );
}

export function CheckIcon({ size = 16, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <path d="m4 12.5 5.5 5.5L20 6.5" />
    </svg>
  );
}

export function SunIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 2.75v2.25M12 19v2.25M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.75 12H5M19 12h2.25M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
    </svg>
  );
}

export function MoonIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <path d="M20 14.2A8.5 8.5 0 1 1 9.8 4a6.8 6.8 0 0 0 10.2 10.2Z" />
    </svg>
  );
}

export function MenuIcon({ size = 22, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  );
}

export function CloseIcon({ size = 22, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function ArrowUpIcon({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} {...base} {...props}>
      <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" />
    </svg>
  );
}

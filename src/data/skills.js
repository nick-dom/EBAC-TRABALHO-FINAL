/**
 * Habilidades agrupadas por área. Mantidas conservadoras: só entram
 * aqui tecnologias explicitamente estudadas/praticadas — nomes de
 * bancos de dados, algoritmos específicos de criptografia e
 * mecanismos de auth (JWT/OAuth/MFA) ficam de fora até serem
 * confirmados como praticados.
 */
export const skillGroups = [
  {
    id: 'frontend',
    title: 'Front-end',
    command: 'ls front-end/',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'CSS Modules'],
  },
  {
    id: 'backend',
    title: 'Back-end & APIs',
    command: 'ls back-end/',
    items: ['Node.js', 'Express', 'REST APIs', 'JSON', 'HTTP/HTTPS', 'Postman'],
  },
  {
    id: 'quality',
    title: 'Testes & Performance',
    command: 'ls testes/',
    items: ['Jest', 'React Testing Library', 'Lighthouse', 'Core Web Vitals', 'Chrome DevTools'],
  },
  {
    id: 'devops',
    title: 'DevOps & Infraestrutura',
    command: 'ls devops/',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Linux', 'Nginx', 'SSH'],
  },
  {
    id: 'redes',
    title: 'Redes',
    command: 'ls redes/',
    items: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'Wireshark', 'Nmap'],
  },
  {
    id: 'seguranca',
    title: 'Segurança & Privacidade',
    command: 'ls seguranca/',
    items: [
      'OWASP Top 10',
      'OWASP ZAP',
      'Burp Suite',
      'Semgrep',
      'CodeQL',
      'Trivy',
      'Gitleaks',
      'LGPD',
      'Privacy by Design',
    ],
  },
];

export const languages = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'C',
  'C++',
  'SQL',
  'Python',
  'Lua',
  'Java',
];

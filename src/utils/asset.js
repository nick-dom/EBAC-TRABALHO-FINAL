/**
 * Resolve o caminho de um arquivo em `public/` respeitando o `base`
 * configurado no Vite (`vite.config.js`).
 *
 * Necessário porque caminhos absolutos escritos à mão como
 * "/img/avatar.webp" funcionam quando o site está na raiz do domínio
 * (Vercel, Netlify), mas quebram quando publicado num subcaminho
 * (ex.: GitHub Pages em "usuario.github.io/EBAC-TRABALHO-FINAL/") — o
 * Vite não reescreve strings de caminho dentro do JS automaticamente,
 * só faz isso para `index.html` e para imports processados por ele.
 *
 * @param {string} caminho caminho relativo à pasta `public/`, com ou sem barra inicial
 */
export function asset(caminho) {
  const base = import.meta.env.BASE_URL || '/';
  const semBarraInicial = caminho.replace(/^\//, '');
  return `${base}${semBarraInicial}`;
}

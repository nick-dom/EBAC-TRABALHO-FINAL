# Portfólio — Dominick Neri dos Santos (huskyn)

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-6-CA4245?logo=reactrouter&logoColor=white)
![Tests](https://img.shields.io/badge/tests-vitest-6E9F18?logo=vitest&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

Portfólio profissional construído em React + Vite, apresentado como um
**menu de jogo**: uma tela principal com "níveis" que levam a páginas
próprias de Sobre, Projetos, Habilidades e Contato. Trabalho final do
curso EBAC.

**🔗 Portfólio no ar:**  https://ebac-trabalho-final.vercel.app



## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Identidade visual](#identidade-visual)
- [Páginas](#páginas)
- [Projetos apresentados](#projetos-apresentados)
- [Stack técnica](#stack-técnica)
- [Como rodar localmente](#como-rodar-localmente)
- [Qualidade: testes, lint e formatação](#qualidade-testes-lint-e-formatação)
- [Deploy](#deploy)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Personalizando o conteúdo](#personalizando-o-conteúdo)
- [Licença](#licença)

## Sobre o projeto

Ao entrar, a pessoa vê uma breve tela de carregamento e chega ao
**menu principal** (Hub): logo, foto, resumo profissional e quatro
cartões de "nível" — cada um abre uma página própria. Uma barra de
navegação estilo HUD fica fixa no topo em todas as páginas, então dá
pra pular direto entre seções sem voltar ao menu.

## Identidade visual

A identidade parte das cores reais do emblema e do logotipo HUSKYN
(fornecidos por você): um roxo/violeta vibrante e prata metálico sobre
um fundo quase-preto.

- **Paleta**: fundo `#0c0a13`, acentos violeta (`#a855f7`) e prata
  (`#cbd0d8`).
- **Tipografia**: Space Grotesk (títulos e corpo) + JetBrains Mono
  (labels, comandos, tags).
- **Marca**: o emblema do lobo aparece no cabeçalho (link para o menu)
  e como marca d'água na tela principal; o logotipo HUSKYN é o título
  da tela de carregamento e do menu.
- **Avatar**: sua foto real, com moldura circular em gradiente
  violeta→prata e cantos estilo mira de HUD.
- **Linguagem de jogo**: cada seção é titulada como um comando real
  (`cat sobre.md`, `ls projetos/`, `grep -r skills/`, `mail contato`);
  os projetos são "missões concluídas"; a página de erro 404 é
  "Área desconhecida".

## Páginas

| Rota            | Página      | O que tem                                                              |
| --------------- | ----------- | ---------------------------------------------------------------------- |
| `#/`            | Hub (menu)  | Tela de carregamento, logo, avatar, resumo e os 4 cartões de navegação |
| `#/sobre`       | Sobre mim   | Bio, áreas de foco, contato rápido                                     |
| `#/projetos`    | Projetos    | Os 7 projetos do curso, cada um como uma "missão concluída"            |
| `#/habilidades` | Habilidades | Ferramentas agrupadas por área + linguagens estudadas                  |
| `#/contato`     | Contato     | WhatsApp e e-mail (ícones pixel art) + formulário                      |
| qualquer outra  | 404         | "Área desconhecida", com botão de volta ao menu                        |

> As URLs usam `#/` (roteamento por hash) de propósito — assim um link
> direto para `#/projetos`, ou um F5 nessa página, funciona igual em
> qualquer plataforma de deploy (Vercel, Netlify ou GitHub Pages), sem
> precisar configurar nada no servidor.

## Projetos apresentados

| Projeto                                                                                          | Stack                                        | Repositório                                                                                  |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Nexus Verse** — catálogo de jogos cyberpunk, com PWA e otimizações de performance documentadas | React 19, Vite, React Router, Tailwind v4    | [EBAC-14](https://github.com/nick-dom/EBAC-14)                                               |
| **Gran Ducato** — e-commerce com carrinho global, seletor de moeda e integração com ViaCEP       | React 18, Styled Components, Context API     | [EBAC-19](https://github.com/nick-dom/EBAC-19)                                               |
| **Estante** — controle de leitura pessoal, CRUD completo via API REST                            | React 19, TypeScript, Axios                  | [EBAC-21](https://github.com/nick-dom/EBAC-21)                                               |
| **DevBlog** — blog técnico com SSG + SSR híbrido e SEO completo                                  | Next.js 16, App Router, TypeScript           | [EBAC-23](https://github.com/nick-dom/EBAC-23)                                               |
| **Tasks App** — gerenciador de tarefas com testes automatizados e CI/CD                          | Next.js 15, TypeScript, Jest, GitHub Actions | [EBAC-26](https://github.com/nick-dom/EBAC-26) ([demo](https://nick-dom.github.io/EBAC-26/)) |
| **ECI.EXE** — jogo de ação em Canvas puro, motor escrito do zero                                 | JavaScript, Canvas API                       | [eci-exe-game](https://github.com/nick-dom/eci-exe-game)                                     |
| **Laboratório de Cálculo** — ferramenta interativa de cálculo com KaTeX e Plotly                 | JavaScript, KaTeX, Math.js, Plotly.js        | [lab-matematica](https://github.com/nick-dom/lab-matematica)                                 |

## Stack técnica

- **React 18** + **Vite 5** + **React Router 6** (`HashRouter`).
- **CSS Modules** — estilização modular, sem dependência de runtime.
- **Vitest** + **Testing Library** — 32 testes automatizados.
- **ESLint** + **Prettier**.
- **GitHub Actions** — lint, formatação, testes e build a cada push.

Nenhum ícone (exceto WhatsApp/Gmail, que são artes pixel fornecidas
por você) vem de uma biblioteca externa — todos os SVGs em
`src/components/icons.jsx` foram desenhados à mão.

## Como rodar localmente

Pré-requisitos: Node.js 18+ (veja `.nvmrc`) e npm.

```bash
npm install
npm run dev
# abre em http://localhost:5173
```

Outros comandos:

```bash
npm run build         # build de produção em dist/
npm run preview       # serve o build de produção localmente
npm test              # roda os testes (Vitest)
npm run test:watch    # testes em modo watch
npm run lint          # ESLint
npm run format        # formata o código com Prettier
npm run format:check  # só verifica a formatação (usado no CI)
```

## Qualidade: testes, lint e formatação

- **32 testes automatizados** (Vitest + Testing Library): validação e
  envio do formulário de contato, navegação do cabeçalho (incluindo
  destaque da rota ativa), a sequência de carregamento e o menu do
  Hub, e o conteúdo de cada uma das 5 páginas roteadas.
- **ESLint** com `eslint-plugin-react` e `eslint-plugin-react-hooks`.
- **Prettier** configurado desde o início do projeto.
- **CI no GitHub Actions** (`.github/workflows/ci.yml`) rodando
  `format:check` → `lint` → `test` → `build` a cada push/PR.

## Deploy

### Vercel (recomendado — zero configuração)

1. Suba este código para um repositório no GitHub (veja abaixo).
2. Em [vercel.com](https://vercel.com), **Add New → Project** e
   importe o repositório. O Vercel detecta Vite sozinho — clique em
   **Deploy**.
3. Copie o link gerado e cole no topo deste README.

### Netlify

1. [netlify.com](https://netlify.com) → **Add new site → Import an
   existing project**.
2. Build command: `npm run build` · Publish directory: `dist`.

### GitHub Pages

Já existe um workflow pronto em `.github/workflows/deploy-pages.yml`:

1. **Settings → Pages → Source** → escolha **GitHub Actions**.
2. Se o repositório **não** se chamar `nick-dom.github.io`, ajuste a
   linha `VITE_BASE_PATH` desse workflow para
   `/nome-do-seu-repositorio/`.
3. O deploy roda automaticamente a cada push em `main`.

Se for usar Vercel ou Netlify, pode apagar
`.github/workflows/deploy-pages.yml` com segurança.

### Subindo para o GitHub

```bash
git init
git add -A
git commit -m "feat: portfólio profissional (React + Vite)"
git branch -M main
git remote add origin https://github.com/nick-dom/EBAC-TRABALHO-FINAL.git
git push -u origin main
```

(Este projeto já vem com um commit inicial pronto — talvez só precise
adicionar o remote e dar `push`.)

## Estrutura de pastas

```
EBAC TRABALHO FINAL/
├── .github/workflows/       # CI e deploy opcional pro GitHub Pages
├── public/                  # favicons, manifest, imagens (foto, logo, ícones)
├── src/
│   ├── components/          # componentes reutilizáveis (Header, Avatar, ícones...)
│   │   └── __tests__/
│   ├── pages/                # uma página por rota (Hub, Sobre, Projetos...)
│   │   └── __tests__/
│   ├── data/                 # conteúdo (perfil, projetos, habilidades)
│   ├── hooks/                 # hooks reutilizáveis
│   ├── styles/                 # tokens de design + reset global
│   ├── utils/                  # funções puras (validação, mailto, asset())
│   │   └── __tests__/
│   ├── App.jsx                # define as rotas
│   └── main.jsx                # ponto de entrada (Router fica aqui)
├── index.html
├── vite.config.js
└── package.json
```

## Personalizando o conteúdo

- **`src/data/profile.js`** — nome, bio, e-mail, WhatsApp, GitHub,
  áreas de foco.
- **`src/data/projects.js`** — adicionar/remover/editar projetos.
- **`src/data/skills.js`** — grupos de habilidades e linguagens.
- **`public/img/`** — foto, emblema e logotipo. Para trocar a foto,
  substitua `avatar.webp` (ou aponte `src/components/Avatar.jsx` para
  outro arquivo).



## Licença

MIT — veja [LICENSE](./LICENSE).

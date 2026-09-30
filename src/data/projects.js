/**
 * Dados dos projetos exibidos no portfólio.
 *
 * Mantidos separados dos componentes de propósito — trocar, adicionar
 * ou reordenar um projeto nunca deve exigir tocar em JSX.
 *
 * `live` é omitido quando o projeto não tem uma URL de deploy
 * confirmada; o card então mostra só o link do repositório.
 */
export const projects = [
  {
    id: 'nexus-verse',
    slug: 'nexus-verse',
    name: 'Nexus Verse',
    tagline: 'Catálogo de jogos indie fictício, tema cyberpunk/arcade',
    description:
      'Catálogo de jogos com busca, filtro por gênero e cadastro de novos títulos via formulário controlado. Navegação entre três páginas com React Router, mais página 404.',
    highlight:
      'Auditoria de performance completa: code splitting por rota, PWA com Service Worker, imagens responsivas via srcset e bundle analisado — pontuação Lighthouse documentada antes e depois das otimizações.',
    stack: ['React 19', 'Vite', 'React Router', 'Tailwind CSS v4', 'PWA'],
    repo: 'https://github.com/nick-dom/EBAC-14',
    live: null,
    accent: 'amber',
  },
  {
    id: 'gran-ducato',
    slug: 'gran-ducato',
    name: 'Gran Ducato',
    tagline: 'Loja virtual multicategoria com seletor de região e moeda',
    description:
      'E-commerce fictício de cafés, chás, especiarias e acessórios, com tema claro/escuro automático, calculadora de frete e catálogo de 28 produtos em 5 categorias.',
    highlight:
      'Carrinho global implementado com useReducer, seletor de região que converte preços entre moedas, e frete calculado a partir de uma integração real com a API ViaCEP.',
    stack: ['React 18', 'Styled Components', 'Context API', 'ViaCEP API'],
    repo: 'https://github.com/nick-dom/EBAC-19',
    live: null,
    accent: 'teal',
  },
  {
    id: 'estante',
    slug: 'estante',
    name: 'Estante',
    tagline: 'Controle pessoal de leitura — cadastra, marca e remove livros',
    description:
      'Aplicativo para acompanhar o que você está lendo: adiciona um livro, marca como lido e acompanha estatísticas simples de acervo (total, lidos, pendentes).',
    highlight:
      'CRUD completo (GET/POST/PUT/DELETE) contra uma API REST real via Axios, com TypeScript de ponta a ponta e mensagens de erro específicas para cada falha de rede.',
    stack: ['React 19', 'TypeScript', 'Axios', 'REST API'],
    repo: 'https://github.com/nick-dom/EBAC-21',
    live: null,
    accent: 'amber',
  },
  {
    id: 'devblog',
    slug: 'devblog',
    name: 'DevBlog',
    tagline: 'Blog técnico com SEO completo e renderização híbrida',
    description:
      'Blog com listagem de artigos, página de detalhe por slug e página "Sobre" com estatísticas. Dados vêm de um JSON local, isolado numa camada própria para facilitar trocar por uma API depois.',
    highlight:
      'Combina geração estática (generateStaticParams) e renderização dinâmica (force-dynamic) no mesmo app, com sitemap, robots.txt, Open Graph, Twitter Card e dados estruturados JSON-LD.',
    stack: ['Next.js 16', 'App Router', 'TypeScript', 'SEO'],
    repo: 'https://github.com/nick-dom/EBAC-23',
    live: null,
    accent: 'teal',
  },
  {
    id: 'tasks-app',
    slug: 'tasks-app',
    name: 'Tasks App',
    tagline: 'Gerenciador de tarefas com pipeline de CI/CD',
    description:
      'App de tarefas com prioridade, marcação de concluída/pendente, filtros por status e contadores. Focado em qualidade de código mais do que em features.',
    highlight:
      'Suíte de testes unitários (Jest + Testing Library) para componentes e hooks, rodando automaticamente via GitHub Actions a cada push, com deploy automático no GitHub Pages.',
    stack: ['Next.js 15', 'TypeScript', 'Jest', 'GitHub Actions'],
    repo: 'https://github.com/nick-dom/EBAC-26',
    live: 'https://nick-dom.github.io/EBAC-26/',
    accent: 'amber',
  },
  {
    id: 'eci-exe',
    slug: 'eci-exe',
    name: 'ECI.EXE',
    tagline: 'Jogo de ação em Canvas puro — "um erro que virou consciência"',
    description:
      'Jogo de ação 2D: colete bugs, evolua através de 4 fases desbloqueando poderes (Segfault, Recursion, Loop, Kernel Panic) e enfrente o boss final DEBUG.EXE//ROOT.',
    highlight:
      'Motor de jogo escrito do zero em JavaScript com a Canvas API (sem engine externa) — loop de jogo, colisões, sistema de poderes com cooldown, modo daltônico e efeitos visuais (shake de tela, scanlines, vinheta).',
    stack: ['JavaScript', 'Canvas API', 'Game Dev'],
    repo: 'https://github.com/nick-dom/eci-exe-game',
    live: null,
    accent: 'teal',
  },
  {
    id: 'lab-matematica',
    slug: 'lab-matematica',
    name: 'Laboratório de Cálculo',
    tagline: 'Funções, limites, derivadas, integrais e álgebra — interativo',
    description:
      'Ferramenta de estudo com módulos de funções, limites, derivadas, integrais, álgebra linear e uma calculadora simbólica, tudo em uma única página.',
    highlight:
      'Renderização matemática com KaTeX, cálculo simbólico e numérico com math.js, e gráficos interativos com Plotly.js — três bibliotecas especializadas orquestradas num só arquivo HTML.',
    stack: ['JavaScript', 'KaTeX', 'Math.js', 'Plotly.js'],
    repo: 'https://github.com/nick-dom/lab-matematica',
    live: null,
    accent: 'amber',
  },
];

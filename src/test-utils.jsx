import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

/**
 * Renderiza um componente dentro de um `MemoryRouter` — necessário
 * para qualquer componente que use `<Link>`, `<NavLink>` ou os hooks
 * de rota do react-router, já que eles exigem um Router por perto.
 *
 * @param {React.ReactElement} ui
 * @param {{ route?: string }} [options]
 */
export function renderWithRouter(ui, { route = '/' } = {}) {
  return render(
    <MemoryRouter
      initialEntries={[route]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      {ui}
    </MemoryRouter>
  );
}

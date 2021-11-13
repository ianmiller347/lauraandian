import { render, screen } from '@testing-library/react';
import Page from './Page/Page';

it('renders the page', () => {
  render(<Page />);
  const titleElement = screen.getByText(/laura & ian/i);
  expect(titleElement).toBeInTheDocument();
});

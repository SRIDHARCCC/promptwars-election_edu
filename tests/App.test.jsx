import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from '../src/App';

describe('App Component', () => {
  it('renders the application header and navigation', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByText('CivicPath')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /Main Navigation/i })).toBeInTheDocument();
  });
});

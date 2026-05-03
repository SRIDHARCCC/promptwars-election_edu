import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import HomeDashboard from '../src/pages/HomeDashboard';

describe('HomeDashboard Component', () => {
  it('renders the main heading', () => {
    render(
      <MemoryRouter>
        <HomeDashboard />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Welcome to CivicPath/i })).toBeInTheDocument();
  });

  it('renders four interactive panels for navigation', () => {
    render(
      <MemoryRouter>
        <HomeDashboard />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Where's my Booth\?/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Smart Assistant/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Identity Verification/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Key Date Sync/i })).toBeInTheDocument();
  });

  it('has accessible links to other pages', () => {
    render(
      <MemoryRouter>
        <HomeDashboard />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /Find your booth/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ask Gemini Assistant/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Verify your Voter ID/i })).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BoothMap from '../src/pages/BoothMap';

vi.mock('@react-google-maps/api', () => ({
  useLoadScript: vi.fn().mockImplementation(() => ({
    isLoaded: true,
  })),
  GoogleMap: ({ children }) => <div data-testid="google-map">{children}</div>,
  Marker: () => <div data-testid="map-marker"></div>,
}));

describe('BoothMap Component', () => {
  it('renders correctly when loaded', () => {
    render(<BoothMap />);
    expect(screen.getByRole('heading', { name: /Where's my Booth\?/i })).toBeInTheDocument();
    expect(screen.getByTestId('google-map')).toBeInTheDocument();
    expect(screen.getByTestId('map-marker')).toBeInTheDocument();
  });

  it('shows loading state when not loaded', async () => {
    const { useLoadScript } = await import('@react-google-maps/api');
    useLoadScript.mockImplementationOnce(() => ({
      isLoaded: false,
    }));

    render(<BoothMap />);
    expect(screen.getByText('Loading Google Maps...')).toBeInTheDocument();
  });
});

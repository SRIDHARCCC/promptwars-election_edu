import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Verification from '../src/pages/Verification';

describe('Verification Component', () => {
  it('renders initial upload state', () => {
    render(<Verification />);
    expect(screen.getByRole('heading', { name: /Identity Verification/i })).toBeInTheDocument();
    expect(screen.getByText(/Click or press Enter to upload your Voter ID/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Verify Identity/i })).toBeDisabled();
  });

  it('allows file selection and enables button', () => {
    render(<Verification />);
    const input = document.querySelector('input[type="file"]');
    const file = new File(['dummy content'], 'voter-id.png', { type: 'image/png' });
    
    fireEvent.change(input, { target: { files: [file] } });
    
    expect(screen.getByText('voter-id.png')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Verify Identity/i })).not.toBeDisabled();
  });

  it('simulates verification process', async () => {
    vi.useFakeTimers();
    render(<Verification />);
    
    const input = document.querySelector('input[type="file"]');
    const file = new File(['dummy content'], 'voter-id.png', { type: 'image/png' });
    fireEvent.change(input, { target: { files: [file] } });
    
    const button = screen.getByRole('button', { name: /Verify Identity/i });
    fireEvent.click(button);
    
    expect(screen.getByRole('button', { name: /Processing via Cloud Vision\.\.\./i })).toBeDisabled();
    
    act(() => {
      vi.runAllTimers();
    });
    
    expect(screen.getByText('Verification Successful!')).toBeInTheDocument();
    
    const resetBtn = screen.getByRole('button', { name: /Verify Another ID/i });
    fireEvent.click(resetBtn);
    expect(screen.getByText(/Click or press Enter to upload your Voter ID/i)).toBeInTheDocument();
    
    vi.useRealTimers();
  });
});

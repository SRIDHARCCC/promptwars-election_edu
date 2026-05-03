import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Assistant from '../src/pages/Assistant';

const mockGenerateContent = vi.fn();
vi.mock('@google/genai', () => ({
  GoogleGenAI: class {
    constructor() {
      this.models = {
        generateContent: mockGenerateContent,
      };
    }
  }
}));

describe('Assistant Component', () => {
  it('renders correctly', () => {
    render(<Assistant />);
    expect(screen.getByRole('heading', { name: /Smart Assistant/i })).toBeInTheDocument();
    expect(screen.getByText(/Hello! I am your CivicPath Election Assistant/i)).toBeInTheDocument();
  });

  it('handles user input and API response', async () => {
    import.meta.env.VITE_GEMINI_API_KEY = 'test-key';
    mockGenerateContent.mockResolvedValueOnce({ text: 'This is a mock response from Gemini.' });

    render(<Assistant />);
    
    const input = screen.getByRole('textbox', { name: /Ask the assistant a question/i });
    const sendButton = screen.getByRole('button', { name: /Send message/i });

    fireEvent.change(input, { target: { value: 'How do I vote?' } });
    fireEvent.click(sendButton);

    expect(screen.getByText('How do I vote?')).toBeInTheDocument();
    expect(screen.getByText('Thinking...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('This is a mock response from Gemini.')).toBeInTheDocument();
    });
  });

  it('handles API error', async () => {
    import.meta.env.VITE_GEMINI_API_KEY = 'test-key';
    mockGenerateContent.mockRejectedValueOnce(new Error('API Error'));

    render(<Assistant />);
    
    const input = screen.getByRole('textbox', { name: /Ask the assistant a question/i });
    fireEvent.change(input, { target: { value: 'Error trigger?' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      expect(screen.getByText(/Sorry, I am having trouble connecting/i)).toBeInTheDocument();
    });
  });
});

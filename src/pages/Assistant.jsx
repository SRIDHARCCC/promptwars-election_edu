import { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

function Assistant() {
  const [messages, setMessages] = useState([
    { text: "Hello! I am your CivicPath Election Assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput('');
    setIsLoading(true);

    try {
      // In a real app, you shouldn't expose your API key in the frontend.
      // This should be routed through your backend Cloud Run service.
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API Key not configured");
      }

      const ai = new GoogleGenAI({ apiKey: apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are an election assistant for the CivicPath app. Answer the following question helpfully and concisely: ${userMessage}`,
      });

      setMessages(prev => [...prev, { text: response.text, isBot: true }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { text: "Sorry, I am having trouble connecting to the intelligence service right now. Please check your API keys.", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section aria-labelledby="assistant-heading">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <MessageSquare size={32} color="#4F46E5" aria-hidden="true" />
        <h1 id="assistant-heading">Smart Assistant</h1>
      </div>
      <p style={{ marginBottom: '24px' }}>
        Ask me anything about election laws, candidate affidavits, or registration steps.
        <br/><small style={{ color: '#F59E0B' }}>Note: Requires VITE_GEMINI_API_KEY in .env.</small>
      </p>

      <div className="chat-window">
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-bubble ${msg.isBot ? 'bot' : 'user'}`}>
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="chat-bubble bot" style={{ opacity: 0.7 }}>
              Thinking...
            </div>
          )}
        </div>
        <div className="chat-input-area">
          <input 
            type="text" 
            className="chat-input"
            placeholder="Type your question..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            aria-label="Ask the assistant a question"
          />
          <button className="btn-primary" onClick={handleSend} disabled={isLoading} style={{ padding: '8px 16px', borderRadius: '50%' }} aria-label="Send message">
            <Send size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Assistant;

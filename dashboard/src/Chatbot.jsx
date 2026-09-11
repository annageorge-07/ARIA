import { useState } from "react";
import { Brain, Send } from "lucide-react";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "qwen2.5:3b-instruct",
          messages: updatedMessages,
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error("Ollama request failed");
      }

      const data = await response.json();

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.message.content,
        },
      ]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "⚠️ Could not connect to Qwen. Make sure Ollama is running.",
        },
      ]);
    }

    setLoading(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="chatbot">
      <div className="chat-header">
        <div className="chat-title">
          <div className="chat-icon">
            <Brain size={19} />
          </div>

          <div>
            <h3>ARIA AI</h3>
            <span>Qwen2.5 · Local LLM</span>
          </div>
        </div>

        <div className="ai-online">
          <span></span>
          ONLINE
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.role === "user"
                ? "user-message"
                : "ai-message"
            }`}
          >
            <div className="message-label">
              {message.role === "user" ? "YOU" : "ARIA"}
            </div>

            <div className="message-content">
              {message.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="message ai-message">
            <div className="message-label">ARIA</div>
            <div className="message-content typing">
              Qwen is thinking...
            </div>
          </div>
        )}
      </div>

      <div className="chat-input-area">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask ARIA anything..."
          rows="1"
        />

        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
        >
          <Send size={17} />
        </button>
      </div>
    </div>
  );
}

export default Chatbot;

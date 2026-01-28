import { useState, useRef, useEffect } from 'react'
import './App.css'
import ChatResponse from './components/ChatResponse'
import ChatInput from './components/ChatInput'

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot', timestamp: new Date() }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (userMessage) => {
    if (!userMessage.trim()) return

    // Add user message to chat
    const newUserMessage = {
      id: messages.length + 1,
      text: userMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newUserMessage])
    setIsLoading(true)


    try {
      // Call your Spring Boot backend
      const response = await fetch('https://aichatbot-916s.onrender.com/api/chat/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userMessage }) // FIX
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.text() // FIX

      const botMessage = {
        id: messages.length + 2,
        text: data,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])

    } catch (error) {
      console.error('Error:', error)
      const errorMessage = {
        id: messages.length + 2,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="App">
      <header className='chatbot-header'>
        <div className='header-content'>
          <h1>🤖 AI ChatBot</h1>
          <p>Your intelligent assistant</p>
        </div>
      </header>

      <div className='chatbot-container'>
        <ChatResponse messages={messages} isLoading={isLoading} />
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  )
}

export default App

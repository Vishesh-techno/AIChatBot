import { useState } from 'react'

const ChatInput = ({ onSendMessage, isLoading }) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim()) {
            onSendMessage(input)
            setInput('')
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit(e)
        }
    }

    return (
        <div className='chat-input-container'>
            <form onSubmit={handleSubmit} className='input-form'>
                <div className='input-wrapper'>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder='Type your message here... (Shift+Enter for new line)'
                        className='message-input'
                        disabled={isLoading}
                        rows='3'
                    />
                    <button
                        type='submit'
                        className='send-button'
                        disabled={isLoading || !input.trim()}
                    >
                        {isLoading ? '⏳ Sending...' : '📤 Send'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ChatInput

import { useEffect } from 'react'

const ChatResponse = ({ messages, isLoading }) => {
    useEffect(() => {
        // Auto-scroll to bottom when new messages arrive
        const chatContainer = document.querySelector('.messages-container')
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight
        }
    }, [messages])

    return (
        <div className='messages-container'>
            {messages.length === 0 ? (
                <div className='empty-state'>
                    <p>No messages yet. Start a conversation!</p>
                </div>
            ) : (
                messages.map((message) => (
                    <div key={message.id} className={`message message-${message.sender}`}>
                        <div className={`message-content ${message.sender}-message`}>
                            <p>{message.text}</p>
                            <span className='message-time'>
                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </div>
                ))
            )}
            {isLoading && (
                <div className='message message-bot'>
                    <div className='message-content bot-message'>
                        <div className='typing-indicator'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChatResponse

import * as React from 'react';
import { logger } from '../utils/logger';

export type MessageType = 'success' | 'error' | 'info' | 'warning' | 'status';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  duration?: number;
  timestamp: string;
  data?: any;
}

interface MessageContextType {
  messages: Message[];
  addMessage: (content: string, type: MessageType, data?: any, duration?: number) => void;
  removeMessage: (id: string) => void;
  clearMessages: () => void;
}

const MessageContext = React.createContext<MessageContextType | undefined>(undefined);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = React.useState<Message[]>([]);

  const addMessage = React.useCallback((content: string, type: MessageType, data?: any, duration = 5000) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newMessage: Message = {
      id,
      type,
      content,
      duration,
      timestamp: new Date().toISOString(),
      data,
    };

    // Log the message using our logger
    switch (type) {
      case 'error':
        logger.error(content, data);
        break;
      case 'warning':
        logger.warn(content, data);
        break;
      case 'info':
      case 'status':
        logger.info(content, data);
        break;
      case 'success':
        logger.debug(content, data);
        break;
    }
    
    setMessages((prev) => [...prev, newMessage]);

    if (duration > 0) {
      setTimeout(() => {
        removeMessage(id);
      }, duration);
    }
  }, []);

  const removeMessage = React.useCallback((id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  }, []);

  const clearMessages = React.useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <MessageContext.Provider value={{ messages, addMessage, removeMessage, clearMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => {
  const context = React.useContext(MessageContext);
  if (context === undefined) {
    throw new Error('useMessages must be used within a MessageProvider');
  }
  return context;
};

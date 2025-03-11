import * as React from 'react';
import { useMessages } from '../context/MessageContext';

const MessageDisplay: React.FC = () => {
  const { messages, removeMessage } = useMessages();

  const getMessageClass = (type: string) => {
    switch (type) {
      case 'error':
        return 'bg-red-500 text-white';
      case 'success':
        return 'bg-[#1beaa5] text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      case 'status':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`p-4 rounded-lg shadow-lg max-w-sm animate-fade-in ${getMessageClass(message.type)} font-['Neue_Kabel']`}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <p className="font-medium">{message.content}</p>
              {message.data && (
                <pre className="mt-2 text-sm opacity-75 overflow-x-auto">
                  {typeof message.data === 'string' ? message.data : JSON.stringify(message.data, null, 2)}
                </pre>
              )}
              <p className="text-xs opacity-75 mt-1">
                {new Date(message.timestamp).toLocaleTimeString()}
              </p>
            </div>
            <button
              onClick={() => removeMessage(message.id)}
              className="ml-4 text-white opacity-75 hover:opacity-100 transition-opacity"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageDisplay;

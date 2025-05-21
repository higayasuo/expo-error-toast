import React, { createContext, useContext, useState, useCallback } from 'react';
import { ErrorToast } from '../components/ErrorToast';

interface ErrorToastContextType {
  showError: (error: unknown) => void;
}

const ErrorToastContext = createContext<ErrorToastContextType | undefined>(undefined);

export function useErrorToast() {
  const context = useContext(ErrorToastContext);
  if (!context) {
    throw new Error('useErrorToast must be used within an ErrorToastProvider');
  }
  return context;
}

interface ErrorToastProviderProps {
  children: React.ReactNode;
}

const formatErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return JSON.stringify(error);
};

export function ErrorToastProvider({ children }: ErrorToastProviderProps) {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [visible, setVisible] = useState(false);

  const showError = useCallback((error: unknown) => {
    setErrorMessage(formatErrorMessage(error));
    setVisible(true);
  }, []);

  const clearError = useCallback(() => {
    setVisible(false);
    // Clear the message after animation would complete
    setTimeout(() => setErrorMessage(''), 300);
  }, []);

  return (
    <ErrorToastContext.Provider value={{ showError }}>
      {children}
      <ErrorToast
        message={errorMessage}
        visible={visible}
        onClose={clearError}
      />
    </ErrorToastContext.Provider>
  );
}

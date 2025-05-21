# expo-error-toast

This project is an Expo library that provides a error toast display feature with copy functionality for Web, iOS and Android platforms.

## Features

- 🎯 Universal error handling across Web, iOS, and Android
- 📋 Copy error message to clipboard
- 🎨 Consistent styling across platforms
- 🔄 Context-based error management
- 📱 Responsive design with scrollable error messages
- 🎭 Support for various error types (Error objects, strings, and other types)

## Installation

```bash
npm install expo-error-toast
```

## Usage

1. Wrap your app with the `ErrorToastProvider`:

```tsx
import { ErrorToastProvider } from 'expo-error-toast';

export default function App() {
  return (
    <ErrorToastProvider>
      <YourApp />
    </ErrorToastProvider>
  );
}
```

2. Use the `useErrorToast` hook to show errors:

```tsx
import { useErrorToast } from 'expo-error-toast';

function YourComponent() {
  const { showError } = useErrorToast();

  const handleError = () => {
    try {
      // Your code that might throw an error
    } catch (error) {
      showError(error);
    }
  };

  return <Button onPress={handleError} title="Try Something" />;
}
```

## API

### ErrorToastProvider

The provider component that enables error toast functionality throughout your app.

### useErrorToast

A hook that provides access to the error toast functionality.

#### Methods

- `showError(error: unknown)`: Displays an error toast with the given error message.
  - Supports Error objects, strings, and other types
  - Automatically formats the error message for display

## Error Toast Features

- Displays error messages in a toast notification
- Copy button to copy error message to clipboard
- Close button to dismiss the toast
- Scrollable for long error messages
- Semi-transparent overlay to focus attention on the error
- Consistent styling across all platforms

## License

MIT

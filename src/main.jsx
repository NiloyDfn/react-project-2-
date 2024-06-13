import React from 'react';
import { createRoot } from 'react-dom/client'; // Importing createRoot from 'react-dom'
import App from './App.jsx';
import './index.css';
import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher.jsx';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

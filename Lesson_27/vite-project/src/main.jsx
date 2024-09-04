import React from 'react';
import ReactDOM from 'react-dom/client'; // імпортуємо новий API
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';

import { ThemeProvider } from './components/ThemeContext/ThemeContext';

// Отримуємо кореневий елемент
const rootElement = document.getElementById('root');

// Створюємо корінь додатка за допомогою createRoot
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
     <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
    </ThemeProvider>
  </React.StrictMode>
);

import { Outlet, Link } from 'react-router-dom';
import { useTheme } from '../src/components/ThemeContext/ThemeContext';
import "./Styles/Menu.css"

import ErrorBoundary from '../src/components/ErrorBoundary/ErrorBoundary.jsx';


function App() {

  const { theme, toggleTheme } = useTheme();

  return (
    <ErrorBoundary>

     <div className={theme}> 
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/contacts">Контакти</Link>
          </li>
          <li>
            <Link to="/about">Про мене</Link>
          </li>
          <button onClick={toggleTheme}>Тема {theme === 'light' ? 'Темна' : 'Світла'}</button> {/* Кнопка для зміни теми */}
        </ul>
      </nav>
      <Outlet />
    </div>
    </ErrorBoundary>
  );
}

export default App;

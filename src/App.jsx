import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './design-system/design-system.css';
import { DesignSystemPage } from './design-system/DesignSystemPage';
import { AnionProgramPage } from './pages/AnionProgramPage';
import styles from './App.module.css';

function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      <span className={styles.navBrand}>Аніон Market</span>
      <div className={styles.navLinks}>
        <Link to="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
          Prototype
        </Link>
        <Link to="/design-system" className={`${styles.navLink} ${pathname === '/design-system' ? styles.active : ''}`}>
          Design System
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<AnionProgramPage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

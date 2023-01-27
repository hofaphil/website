import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Share from './pages/Share';
import { useEffect } from 'react';

export const HOME = '/'
export const CONTACT = '/contact'
export const SHARE = '/share'

let titles: any = {}
titles[HOME] = 'Home'
titles[CONTACT] = 'Contact'
titles[SHARE] = 'Share'

function App() {
  const location = useLocation()
  useEffect(
    () => { document.title = titles[location.pathname] ?? 'philipphofer.de' },
    [location],
  )

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path={HOME} element={<Home />} />
      <Route path={CONTACT} element={<Contact />} />
      <Route path={SHARE} element={<Share />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import { ThemeContextProvider } from './shared/contexts/theme-context';

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;

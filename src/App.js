import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SyncScreen from './sync-screen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sync" element={<SyncScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

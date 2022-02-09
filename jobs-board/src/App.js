import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import ListView from './components/ListView';
import JobView from './components/JobView';

function App() {
  return (
    <div className="bg-teal-50">
      <Header />
      <main className="max-w-screen-2xl  m-auto">
        <Routes>
          <Route path="/" elment={<ListView />} />
          <Route path="job" element={<JobView />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

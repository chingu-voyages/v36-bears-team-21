import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import ListView from './components/ListView';
import JobView from './components/JobView';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-teal-50">
        <Header />
        <Routes>
          <Route index element={<ListView />} />{' '}
          <Route path="jobs" elemlent={<ListView />}>
            <Route path=":jobId" element={<JobView />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Outlet />
      </div>
    </BrowserRouter>
  );
}

export default App;

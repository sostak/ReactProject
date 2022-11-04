import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details.jsx';
import List from './pages/List.jsx';
import NewRecord from './pages/NewRecord.jsx';
import NoPage from './pages/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import UpdateRecord from './pages/UpdateRecord';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route index element={<List />} />
        <Route path="details" element={<Details />} />
        <Route path="newrecord" element={<NewRecord />} />
        <Route path="updaterecord" element={<UpdateRecord/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

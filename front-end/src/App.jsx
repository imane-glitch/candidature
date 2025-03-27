import { Routes, Route } from 'react-router-dom';
import './App.css';


import Layout from './component/Layout'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Form from './pages/Form';

function App() {
  return (
   <Routes>
    <Route path="" element={<Layout />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/post" element={<Form />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
  );
}

export default App;
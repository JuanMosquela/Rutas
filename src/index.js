import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Inicio from './routes/Inicio';
import NoEncontrado from './routes/NoEncontrado';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Inicio />} />
          <Route path='blog' element={<Blog />} />
          
          <Route path='contacto' element={<Contacto />} />
          <Route path='*' element={<NoEncontrado />} />

        </Route>
      </Routes>          
    </BrowserRouter>
  </React.StrictMode>
);



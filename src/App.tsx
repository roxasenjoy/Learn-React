// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppPokemon } from './AppPokemon';
import { DetailsPokemon } from './components/Exerice-pokemon/pokemon/DetailsPokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppPokemon />} />
        <Route path="/pokemon/:id" element={<DetailsPokemon/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
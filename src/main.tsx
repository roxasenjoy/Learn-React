import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppList } from './AppList.tsx'
import { AppPokemon } from './AppPokemon.tsx'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App/>
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/default.ts'
import { GlobalStyle } from './styles/Global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </StrictMode>,
)

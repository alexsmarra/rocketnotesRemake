import React from 'react'
import ReactDOM from 'react-dom/client'
// para prover o nosso tema de styles/theme.js
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import { Details } from './pages/Details'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './app/model/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
  </StrictMode>,
)

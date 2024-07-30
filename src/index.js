import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <div style={{ pointerEvents: 'none', position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', gap: 35, alignItems: 'center', padding: 40 }}>
      <div style={{ position: 'relative', flex: 1, marginLeft: 35, display: 'flex', alignItems: 'flex-end', gap: 35, justifyContent: 'space-between' }}></div>
    </div>
  </>
)

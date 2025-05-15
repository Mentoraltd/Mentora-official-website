import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
//import Students from './Resources/students';
//import Institution from './Resources/institution';
//import Learn from './Resources/learn-demo';
//import Blogs from './Resources/blog';
import App from './App.jsx'
//import Navigation from './navbar/navigation.jsx';
//import Events from './Resources/events';
import UpcomingFeatures from './Resources/UpcomingFeatures';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

/*    <BrowserRouter>
    <Routes>
        <Route index element={<App />} />
        <Route path="features" element={<Features />} />
        <Route path="resources" element={<Resources />} />
        </Routes>
      </BrowserRouter> */

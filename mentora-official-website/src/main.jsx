import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Students from './Resources/students';
import Institution from './Resources/institution';
import Learn from './Resources/learn-demo';
import Blogs from './Resources/blog';
import App from './App.jsx';
//import Navigation from './navbar/navigation.jsx';
import Events from './Resources/events';
//import UpcomingFeatures from './Resources/UpcomingFeatures';
import Error from './navbar/Pages/errorpage.jsx';
import DownloadPage from './navbar/Pages/download.jsx';
import FAQ from './navbar/Pages/HelpCenter.jsx';
import PricingPage from './navbar/Pages/PricingComparison.jsx';


const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <Error/>
},
{
  path: '/students',
  element: <Students/>
},
{
  path: '/institution',
  element: <Institution/>
},
{
  path: '/learn',
  element: <Error/>
},
{
  path: '/blog',
  element: <Blogs/>
},
{
  path: '/download',
  element: <DownloadPage/>
},
{
  path: '/helpcenter',
  element: <FAQ/>
},
{
  path: '/pricing',
  element: <PricingPage/>
},
{
  path: '/events',
  element: <Error/>
},


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

/*    <BrowserRouter>
    <Routes>
        <Route index element={<App />} />
        <Route path="features" element={<Features />} />
        <Route path="resources" element={<Resources />} />
        </Routes>
      </BrowserRouter> */

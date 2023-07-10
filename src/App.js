import './App.css';
import About from './About';
import Contact from './ContactMe';
import GraphicDesign from './GraphicDesign';
import WebDevelopment from './WebDevelopment';

import Navbar from './NavBar';

import { Outlet, Link, Route, BrowserRouter as Router, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Navbar />,
      children: [
        {
          path: '/',
          element: <About />
        },
        {
          path: 'webdev',
          element: <WebDevelopment />
        },
        {
          path: 'graphicdesign',
          element: <GraphicDesign />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
  }
])

function App() {
  return (
      <div>
        <RouterProvider router={router} />
        {/* <Navbar />
        <div className='body'>
          <About />
          <DriverGrid grid={driversGrid}/>
          </div>
          <div> 
          <Footer />
          </div> */}
        </div>
  );
}
export default App;
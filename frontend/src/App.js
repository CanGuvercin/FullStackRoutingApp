import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './components/layout/RootLayout';
import ErrorPage from './pages/ErrorPage';
import EventsRootLayout from './components/layout/EventsRootLayout';
console.log('EventsRootLayout:', EventsRootLayout);

 // Assuming you have a global CSS file for styles

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // Ana sayfa için index tanımı (yani path: '/')
        element: <HomePage />,
      },
      {
        path: 'events',
        element: <EventsRootLayout />, // BONUS layout
        children: [
          {
            index: true, // /events
            element: <EventsPage />,
          },
          {
            path: 'new', // /events/new
            element: <NewEventPage />,
          },
          {
            path: ':eventId', // /events/:eventId
            element: <EventDetailPage />,
          },
          {
            path: ':eventId/edit', // /events/:eventId/edit
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

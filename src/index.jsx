import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Articles from './components/Articles';
import Reviews from './components/Reviews';
import './style.css';
import Movies from './components/Movies';
import Menu from './components/Menu';
import { movies } from './movie-database';
import Movie from './components/Movie';


const App = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
    </div>
  );
};

const ErrorPage = () => {
  return (
    <main>
      <h2>Oppáá!</h2>
      <h3>404: Nothing to see here</h3>
      <p>There must have been an error</p>
      <Link to='/'>Back to the main page.</Link>
    </main>
  );
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "movies/",
        element: <Movies movies={movies} />,
        children: [{
          path: ":movieId",
          element: < Movie movies={movies} />,
        },]
      },]
  }])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);

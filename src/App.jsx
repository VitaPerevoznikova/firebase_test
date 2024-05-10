import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';

const Home = lazy(() => import('pages/HomePage/HomePage.jsx'));
const Nannies = lazy(() => import('pages/NanniesPage/NanniesPage.jsx'));
const Favorites = lazy(() => import('pages/FavoritesPage/FavoritesPage.jsx'));


function App() {
 
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/nannies" element={<Nannies />} />
          <Route path="/favorites" element={<Favorites />}>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;

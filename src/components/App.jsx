import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home';
import CategoryPage from 'pages/CategoryPage';
import MealDetail from 'pages/MealDetail';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="category/:name" element={<CategoryPage />} />

          <Route path="category/meal/:id" element={<MealDetail />} />
        </Route>
      </Routes>
    </div>
  );
};

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GamePage } from '../Page';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

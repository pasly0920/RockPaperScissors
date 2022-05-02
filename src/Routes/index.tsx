import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RPSPage, RPSLSPage } from '../Page';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RPSPage />} />
        <Route path='/additional' element={<RPSLSPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

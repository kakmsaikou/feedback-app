import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import FeedbackPage from './pages/FeedbackPage';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<FeedbackPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

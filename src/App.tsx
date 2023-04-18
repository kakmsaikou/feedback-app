import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import FeedbackPage from './pages/FeedbackPage';

const App = () => {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/feedback-app' element={<FeedbackPage />} />
          <Route path='/feedback-app/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

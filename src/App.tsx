import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackDataList from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStatus from './components/FeedbackStatus';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';

const App = () => {
  const [feedbackDataList, setFeedbackDataList] = useState(FeedbackDataList);

  const addFeedback = (newFeedback: FeedbackData) => {
    setFeedbackDataList([newFeedback, ...feedbackDataList]);
  };

  const deleteFeedback = (id: string) => {
    setFeedbackDataList(feedbackDataList.filter(item => item.id !== id));
  };
  return (
    <>
      <Header />
      <Router>
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm addFeedback={addFeedback} />
                  <FeedbackStatus feedbackDataList={feedbackDataList} />
                  <FeedbackList
                    feedbackDataList={feedbackDataList}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

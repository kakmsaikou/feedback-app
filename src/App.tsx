import { useState } from 'react';
import Header from './components/Header';
import FeedbackDataList from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

const App = () => {
  const [feedbackDataList, setFeedbackDataList] = useState(FeedbackDataList);
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedbackDataList={feedbackDataList} />
      </div>
    </>
  );
};

export default App;

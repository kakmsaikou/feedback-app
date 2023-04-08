import { useState } from 'react';
import Header from './components/Header';
import FeedbackDataList from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

const App = () => {
  const [feedbackDataList, setFeedbackDataList] = useState(FeedbackDataList);

  const deleteFeedback = (id: number) => {
    setFeedbackDataList(feedbackDataList.filter(item => item.id !== id));
  };
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList
          feedbackDataList={feedbackDataList}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
};

export default App;

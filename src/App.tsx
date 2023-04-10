import { useState } from 'react';
import Header from './components/Header';
import FeedbackDataList from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStatus from './components/FeedbackStatus';
import FeedbackForm from './components/FeedbackForm';

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
      <div className='container'>
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStatus feedbackDataList={feedbackDataList} />
        <FeedbackList
          feedbackDataList={feedbackDataList}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
};

export default App;

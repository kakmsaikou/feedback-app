import { useState } from 'react';
import AboutIconLInk from '../components/AboutIconLink';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import FeedbackStatus from '../components/FeedbackStatus';
import FeedbackDataList from '../data/FeedbackData';
import { FeedbackProvider } from '../context/FeedbackContext';

const FeedbackPage = () => {
  const [feedbackDataList, setFeedbackDataList] = useState(FeedbackDataList);

  const addFeedback = (newFeedback: FeedbackData) => {
    setFeedbackDataList([newFeedback, ...feedbackDataList]);
  };

  const deleteFeedback = (id: string) => {
    setFeedbackDataList(feedbackDataList.filter(item => item.id !== id));
  };
  return (
    <FeedbackProvider>
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackStatus feedbackDataList={feedbackDataList} />
      <FeedbackList
        feedbackDataList={feedbackDataList}
        handleDelete={deleteFeedback}
      />
      <AboutIconLInk />
    </FeedbackProvider>
  );
};

export default FeedbackPage;

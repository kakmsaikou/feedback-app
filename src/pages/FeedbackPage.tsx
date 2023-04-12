import AboutIconLInk from '../components/AboutIconLink';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import FeedbackStatus from '../components/FeedbackStatus';
import { FeedbackProvider } from '../context/FeedbackContext';

const FeedbackPage = () => {
  return (
    <FeedbackProvider>
      <FeedbackForm />
      <FeedbackStatus />
      <FeedbackList />
      <AboutIconLInk />
    </FeedbackProvider>
  );
};

export default FeedbackPage;

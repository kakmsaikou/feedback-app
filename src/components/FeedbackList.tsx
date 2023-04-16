import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

const FeedbackList = () => {
  const { feedbackDataList, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedbackDataList || feedbackDataList.length === 0)) {
    return <p>No Feedback Yet</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbackDataList.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;

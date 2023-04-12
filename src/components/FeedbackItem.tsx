import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';

interface Props {
  feedbackData: FeedbackData;
}

const FeedbackItem = ({ feedbackData }: Props) => {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className='num-display'>{feedbackData.rating}</div>
      <button className='close' onClick={() => deleteFeedback(feedbackData.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{feedbackData.text}</div>
    </Card>
  );
};

export default FeedbackItem;

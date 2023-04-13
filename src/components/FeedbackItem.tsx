import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';

interface Props {
  item: FeedbackData;
}

const FeedbackItem = ({ item }: Props) => {
  const { editFeedback, deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button
        className='edit'
        onClick={() => {
          editFeedback(item);
        }}
      >
        <FaEdit color='purple' />
      </button>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;

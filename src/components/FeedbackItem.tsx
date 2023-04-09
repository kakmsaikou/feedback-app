import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';

interface Props {
  feedbackData: FeedbackData;
  handleDelete: (id: number) => void;
}

const FeedbackItem = ({ feedbackData, handleDelete }: Props) => {
  return (
    <Card>
      <div className='num-display'>{feedbackData.rating}</div>
      <button className='close' onClick={() => handleDelete(feedbackData.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{feedbackData.text}</div>
    </Card>
  );
};

export default FeedbackItem;

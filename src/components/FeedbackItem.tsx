import { FeedbackData } from '../data/FeedbackData';

interface Props {
  feedbackData: FeedbackData;
}

const FeedbackItem = ({ feedbackData }: Props) => {
  return (
    <div className='card'>
      <div className='num-display'>{feedbackData.rating}</div>
      <div className='text-display'>{feedbackData.text}</div>
    </div>
  );
};

export default FeedbackItem;

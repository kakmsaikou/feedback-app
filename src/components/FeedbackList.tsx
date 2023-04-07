import { FeedbackData } from '../data/FeedbackData';
import FeedbackItem from './FeedbackItem';

export interface Props {
  feedbackDataList: FeedbackData[];
}

const FeedbackList = ({ feedbackDataList }: Props) => {
  return (
    <div>
      {feedbackDataList.map(item => (
        <FeedbackItem key={item.id} feedbackData={item} />
      ))}
    </div>
  );
};

export default FeedbackList;

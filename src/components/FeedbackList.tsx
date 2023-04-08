import FeedbackItem from './FeedbackItem';

export interface Props {
  feedbackDataList: FeedbackData[];
}

const FeedbackList = ({ feedbackDataList }: Props) => {
  if (!feedbackDataList || feedbackDataList.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div>
      {feedbackDataList.map(item => (
        <FeedbackItem key={item.id} feedbackData={item} />
      ))}
    </div>
  );
};

export default FeedbackList;

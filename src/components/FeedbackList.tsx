import FeedbackItem from './FeedbackItem';

export interface Props {
  feedbackDataList: FeedbackData[];
  handleDelete: (id: string) => void;
}

const FeedbackList = ({ feedbackDataList, handleDelete }: Props) => {
  if (feedbackDataList.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div>
      {feedbackDataList.map(item => (
        <FeedbackItem
          key={item.id}
          feedbackData={item}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default FeedbackList;

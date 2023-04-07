import Card from './shared/Card';

interface Props {
  feedbackData: FeedbackData;
}

const FeedbackItem = ({ feedbackData }: Props) => {
  return (
    <Card reverse={true}>
      <div className='num-display'>{feedbackData.rating}</div>
      <div className='text-display'>{feedbackData.text}</div>
    </Card>
  );
};

export default FeedbackItem;

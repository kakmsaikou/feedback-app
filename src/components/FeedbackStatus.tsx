export interface Props {
  feedbackDataList: FeedbackData[];
}

const FeedbackStatus = ({ feedbackDataList }: Props) => {
  const average = Number(
    (
      feedbackDataList.reduce(
        (accumulator, currentValue) => (accumulator += currentValue.rating),
        0
      ) / feedbackDataList.length
    )
      .toFixed(1)
      .replace(/[.,]0$/, '')
  );
  return (
    <div className='feedback-stats'>
      <div>{feedbackDataList.length} Reviews</div>
      <div>Average Rating: {isNaN(average) ? 0 : average}</div>
    </div>
  );
};

export default FeedbackStatus;

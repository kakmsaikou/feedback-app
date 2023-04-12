import React, { createContext, useState } from 'react';
import FeedbackDataList from '../data/FeedbackData';

interface FeedbackContextType {
  feedbackDataList: FeedbackData[];
  addFeedback: (newFeedback: FeedbackData) => void;
  deleteFeedback: (id: string) => void;
}

export const FeedbackContext = createContext<FeedbackContextType>({
  feedbackDataList: [],
  addFeedback: () => {},
  deleteFeedback: () => {},
});

export interface Props {
  children: React.ReactNode;
}

export const FeedbackProvider = ({ children }: Props) => {
  const [feedbackDataList, setFeedbackDataList] = useState(FeedbackDataList);

  const addFeedback = (newFeedback: FeedbackData) => {
    setFeedbackDataList([newFeedback, ...feedbackDataList]);
  };

  const deleteFeedback = (id: string) => {
    setFeedbackDataList(feedbackDataList.filter(item => item.id !== id));
  };
  return (
    <FeedbackContext.Provider
      value={{ feedbackDataList, addFeedback, deleteFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

import React, { createContext, useState } from 'react';
import FeedbackDataList from '../data/FeedbackData';

interface FeedbackContextType {
  feedbackDataList: FeedbackData[];
  setFeedbackDataList: (feedbacks: FeedbackData[]) => void;
}

export const FeedbackContext = createContext<FeedbackContextType>({
  feedbackDataList: [],
  setFeedbackDataList: () => {},
});

export interface Props {
  children: React.ReactNode;
}

export const FeedbackProvider = ({ children }: Props) => {
  const [feedbackDataList, setFeedbackDataList] = useState(FeedbackDataList);
  return (
    <FeedbackContext.Provider value={{ feedbackDataList, setFeedbackDataList }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

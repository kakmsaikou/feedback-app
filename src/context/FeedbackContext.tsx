import React, { createContext, useState } from 'react';
import FeedbackDataList from '../data/FeedbackData';

export const FeedbackContext = createContext({});

export interface Props {
  children: React.ReactNode;
}

export const FeedbackProvider = ({ children }: Props) => {
  const [feedbackDataList, setFeedbackDataList] = useState(FeedbackDataList);
  return (
    <FeedbackContext.Provider value={{ feedbackDataList }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

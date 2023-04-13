import React, { createContext, useState } from 'react';
import FeedbackDataList from '../data/FeedbackData';

interface FeedbackContextType {
  feedbackDataList: FeedbackData[];
  addFeedback: (newFeedback: FeedbackData) => void;
  deleteFeedback: (id: string) => void;
  feedbackEdit: {
    item: FeedbackData;
    edit: boolean;
  };
  editFeedback: (item: FeedbackData) => void;
}

export const FeedbackContext = createContext<FeedbackContextType>({
  feedbackDataList: [],
  addFeedback: () => {},
  deleteFeedback: () => {},
  feedbackEdit: { item: {} as FeedbackData, edit: false },
  editFeedback: () => {},
});

export interface Props {
  children: React.ReactNode;
}

export const FeedbackProvider = ({ children }: Props) => {
  const [feedbackDataList, setFeedbackDataList] = useState(
    () => FeedbackDataList
  );
  const [feedbackEdit, setFeedbackEdit] = useState(() => ({
    item: {} as FeedbackData,
    edit: false,
  }));

  const addFeedback = (newFeedback: FeedbackData) => {
    setFeedbackDataList([newFeedback, ...feedbackDataList]);
  };

  const deleteFeedback = (id: string) => {
    setFeedbackDataList(feedbackDataList.filter(item => item.id !== id));
  };

  const editFeedback = (item: FeedbackData) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbackDataList,
        addFeedback,
        deleteFeedback,
        feedbackEdit,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

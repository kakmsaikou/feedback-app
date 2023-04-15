import React, { createContext, useState } from 'react';
import FeedbackDataList from '../data/FeedbackData';

interface FeedbackContextType {
  feedbackDataList: FeedbackData[];
  feedbackEdit: {
    item: FeedbackData;
    edit: boolean;
  };
  addFeedback: (newFeedback: FeedbackData) => void;
  deleteFeedback: (id: string) => void;
  editFeedback: (item: FeedbackData) => void;
  updateFeedback: (item: FeedbackData) => void;
}

export const FeedbackContext = createContext<FeedbackContextType>({
  feedbackDataList: [],
  feedbackEdit: { item: {} as FeedbackData, edit: false },
  addFeedback: () => {},
  deleteFeedback: () => {},
  editFeedback: () => {},
  updateFeedback: () => {},
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
    if (window.confirm('Are you sure you want to delete?'))
      setFeedbackDataList(feedbackDataList.filter(item => item.id !== id));
  };

  const editFeedback = (item: FeedbackData) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (updatedItem: FeedbackData) => {
    setFeedbackDataList(
      feedbackDataList.map(item => {
        return item.id === updatedItem.id ? { ...item, ...updatedItem } : item;
      })
    );
    setFeedbackEdit({ ...feedbackEdit, edit: false });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbackDataList,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

import React, { createContext, useEffect, useState } from 'react';

interface FeedbackContextType {
  feedbackDataList: FeedbackData[];
  feedbackEdit: {
    item: FeedbackData;
    edit: boolean;
  };
  isLoading: boolean;
  addFeedback: (newFeedback: Partial<FeedbackData>) => void;
  deleteFeedback: (id: number) => void;
  editFeedback: (item: FeedbackData) => void;
  updateFeedback: (id: number, item: Partial<FeedbackData>) => void;
}

export const FeedbackContext = createContext<FeedbackContextType>({
  feedbackDataList: [],
  feedbackEdit: { item: {} as FeedbackData, edit: false },
  isLoading: true,
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
    () => [] as FeedbackData[]
  );
  const [feedbackEdit, setFeedbackEdit] = useState(() => ({
    item: {} as FeedbackData,
    edit: false,
  }));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`/api?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedbackDataList(data);
    setIsLoading(false);
  };

  const addFeedback = async (newFeedback: Partial<FeedbackData>) => {
    const response = await fetch(`/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedbackDataList([data, ...feedbackDataList]);
  };

  const deleteFeedback = async (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/api/${id}`, {
        method: 'DELETE',
      });

      setFeedbackDataList(feedbackDataList.filter(item => item.id !== id));
    }
  };

  const editFeedback = (item: FeedbackData) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id: number, updatedItem: Partial<FeedbackData>) => {
    setFeedbackDataList(
      feedbackDataList.map(item => {
        return item.id === id ? { ...item, ...updatedItem } : item;
      })
    );
    setFeedbackEdit({ ...feedbackEdit, edit: false });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbackDataList,
        feedbackEdit,
        isLoading,
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

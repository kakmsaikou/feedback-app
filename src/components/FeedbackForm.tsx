import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { v4 as uuidv4 } from 'uuid';
import { FeedbackContext } from '../context/FeedbackContext';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState('');
  const { addFeedback } = useContext(FeedbackContext);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setMessage('');
      setBtnDisabled(true);
    } else if (e.target.value.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage('');
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
        id: uuidv4(),
      };
      addFeedback(newFeedback);
      setText('');
      setBtnDisabled(true);
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect rating={rating} setRating={setRating} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            value={text}
            type='text'
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;

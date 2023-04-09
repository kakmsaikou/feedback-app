import { ChangeEvent, useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            value={text}
            type='text'
            placeholder='Write a review'
          />
          <Button>Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;

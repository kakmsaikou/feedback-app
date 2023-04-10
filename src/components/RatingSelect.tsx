import { ChangeEvent, useState } from 'react';

export interface Props {
  rating: number;
  setRating: (rating: number) => void;
}

const RatingSelect = ({ rating, setRating }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.currentTarget.value));
  };
  return (
    <ul className='rating'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
        <li key={`num${item}`}>
          <input
            type='radio'
            id={`num${item}`}
            name='rating'
            value={item}
            onChange={handleChange}
            checked={rating === item}
          />
          <label htmlFor={`num${item}`}>{item}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;

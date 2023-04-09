import { ChangeEvent, useState } from 'react';

export interface Props {
  select: (rating: number) => void;
}

const RatingSelect = ({ select }: Props) => {
  const [selected, setSelected] = useState(10);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(e.currentTarget.value));
    select(selected);
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
            checked={selected === item}
          />
          <label htmlFor={`num${item}`}>{item}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;

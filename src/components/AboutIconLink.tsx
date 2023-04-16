import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutIconLInk = () => {
  return (
    <div className='about-link'>
      <Link to='/feedback-app/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLInk;

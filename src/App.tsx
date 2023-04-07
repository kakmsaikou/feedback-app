import FeedbackItem from './components/FeedbackItem';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header text={'Hello World'} />
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  );
};

export default App;

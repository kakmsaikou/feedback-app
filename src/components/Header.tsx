export interface Props {
  text: string;
}

const Header = ({ text }: Props) => {
  return (
    <header className='h-16 w-full flex justify-center items-center mb-8  bg-black bg-opacity-40 text-pink-500'>
      <div>
        <h2 className='font-bold'>{text}</h2>
      </div>
    </header>
  );
};

export default Header;

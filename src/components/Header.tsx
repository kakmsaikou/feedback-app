export interface Props {
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const Header = ({
  text = 'Feedback UI',
  bgColor = 'rgba(0,0,0,0.4)',
  textColor = '#ff6a95',
}: Props) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2 className='container'>{text}</h2>
      </div>
    </header>
  );
};

export default Header;

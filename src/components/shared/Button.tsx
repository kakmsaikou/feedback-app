export interface Props {
  children: React.ReactNode;
  version?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
}

const Button = ({
  children,
  version = 'primary',
  type = 'button',
  isDisabled = false,
}: Props) => {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;

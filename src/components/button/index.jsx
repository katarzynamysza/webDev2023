import './index.css';

const Button = ({ name, onClick, buttonType, children, style }) => {
  return (
    <button
      className='button'
      id={name}
      onClick={onClick}
      style={style}
      button-type={buttonType}>
      {children}
    </button>
  );
};

export default Button;

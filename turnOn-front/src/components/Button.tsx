type ButtonProps = {
  label?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export const Button = ({ label, onClick, className, children,}: ButtonProps) => {
  
  return (
    <button onClick={onClick} className={className}>
      {children || label}
    </button>
  );
};

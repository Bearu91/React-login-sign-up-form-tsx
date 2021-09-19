import React from 'react';
import './Button.scss';

type ButtonProps = {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button type="button" onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

import React, { ButtonHTMLAttributes } from 'react';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children } = props;
  return <button {...props}>{children}</button>;
};

export default Button;

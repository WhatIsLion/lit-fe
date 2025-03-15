import type { ButtonHTMLAttributes } from 'react';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children } = props;
  return <button>{children}</button>;
};

export default Button;

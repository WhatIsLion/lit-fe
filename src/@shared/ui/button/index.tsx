import type { ButtonHTMLAttributes } from 'react';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="h-8 w-fit min-w-8 border border-black" {...props}>
      {props.children}
    </button>
  );
};

export default Button;

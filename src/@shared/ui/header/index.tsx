import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Header = (props: Props) => {
  const { children } = props;
  return (
    <header className="flex w-dvw items-center justify-center border border-black">
      <div className="mx-auto">{children}</div>
    </header>
  );
};

export default Header;

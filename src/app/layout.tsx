import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: '우주최강 공구마켓 | 사자는 타이거',
  description: '좋은 건 함께 사자는 타이거! 타이거와 함께 좋은 물건 사자!',
};

interface Props {
  children: ReactNode;
}

const RootLayout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <html lang="ko" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

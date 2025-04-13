import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

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
    <html lang="ko" suppressHydrationWarning className={pretendard.className}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

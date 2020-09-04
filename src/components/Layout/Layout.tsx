import React, { FC } from 'react';
import Head from 'next/head';

import { StyledLayout, StyledLayoutGlobal } from './Layout.styles';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <StyledLayout>
    <Head>
      <title>Bobby Martin | Front End Engineer</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <StyledLayoutGlobal />
    {children}
  </StyledLayout>
);

export default Layout;

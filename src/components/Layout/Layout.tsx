import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import { StyledLayout } from "./Layout.styles";

const Layout = ({ children }) => (
  <StyledLayout>
    <Head>
      <title>Bobby Martin | Front End Engineer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;

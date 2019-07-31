import React from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ location: { pathname } }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default withRouter(ScrollToTop);

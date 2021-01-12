// import React from 'react';
// import { withRouter } from 'react-router-dom';

// class ScrollToTop extends React.Component {
//   componentDidUpdate(prevProps) {
//     if (this.props.location.pathname !== prevProps.location.pathname) {
//       window.scrollTo(0, 0);
//     }
//   }

//   render() {
//     return null;
//   }
// }

// export default withRouter(ScrollToTop);

import { useEffect, useRouter } from 'react';

const ScrollToTop = () => {
  const { pathname, search } = useRouter();

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;

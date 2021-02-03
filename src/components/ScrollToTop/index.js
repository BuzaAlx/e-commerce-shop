import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function ScrollToTop({ children }) {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);

    console.log(history);
  }, []);

  return <>{children}</>;
}

export default ScrollToTop;

import React from "react";
import { useContext } from "react";

import PostContext from "../../Context/PostContext";

const Loading = () => {
  const { loading } = useContext(PostContext);
  return (
    <React.Fragment>
      <div className="loading-block block">
        {loading && <span className="loading-text text">Loading...</span>}
      </div>
    </React.Fragment>
  );
};
export default Loading;

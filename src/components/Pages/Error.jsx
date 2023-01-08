import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import PostContext from "../../Context/PostContext";

const Error = ({ message }) => {
const {loading}=useContext(PostContext);

  return (
    <React.Fragment>
      {!loading && (
        <div className="error-block block">
          <span className="error-message">{message}</span>
          {message === "Page not found" && (
            <NavLink to="/ra-router-crud" className={"home-message block"}>
              {"На главную"}
            </NavLink>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Error;

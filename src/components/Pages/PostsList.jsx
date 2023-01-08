import React, { useContext } from "react";
import PostContext from "../../Context/PostContext";
import { Link } from "react-router-dom";
import { Li } from "../Atoms/Atoms";
import { nanoid } from "nanoid";

import Post from "./Post";
const PostsList = () => {
  const { data } = useContext(PostContext);
  if (!data) {
    return;
  }

  return (
    <React.Fragment>
      <ul className="posts-list">
        {data &&
          data.map((item) => {
            return (
              <Link key={nanoid(5)} to={`/ra-router-crud/posts/${item.id}`}>
                <Li key={nanoid(8)} className="posts-list">
                  <Post key={nanoid(8)} {...item} className="post" />
                </Li>
              </Link>
            );
          })}
      </ul>
    </React.Fragment>
  );
};

export default PostsList;
/** */

/**  <span key={nanoid(8)} >{`/posts/${item.id}`}</span> */

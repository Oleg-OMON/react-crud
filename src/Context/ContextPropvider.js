import PostContext from "./PostContext";

import { useState, useEffect } from "react";

const PostProvider = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url, options) => {
    setLoading(true);
    try {
      const response = await fetch(url, options);

      if (!response.ok)
        throw new Error(
          `${response.url} ${response.status} ${response.statusText}`
        );

      if (options.method === "DELETE") {
        return;
      }

      const data = await response.json();

      setData(data.data);
    } catch (error) {
      console.log(error,"error");
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
   
    fetchData(process.env.REACT_APP_BASE_URL + "/posts", {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const onClickEdit = (event) => {
    event.preventDefault();
  };

  const onClickDelete = (id) => {
    setLoading(true);
    setData((prevState) => prevState.filter((o) => o.id !== id));

    fetchData(process.env.REACT_APP_BASE_URL + `/posts/${id}`, {
      method: "DELETE",
    });

    setLoading(false);
  };

  const handleAdd = (post) => {
    fetchData(process.env.REACT_APP_BASE_URL + "/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });
  };

  return (
    <PostContext.Provider
      value={{ data, loading, error,handleAdd, onClickEdit, onClickDelete }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
export default PostProvider;

import React from "react";
import { ButtonClose, Image, CardText, CardTitle } from "../Atoms/Atoms";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import PostContext from "../../Context/PostContext";
import Form from "../Form/Form";

import { nanoid } from "nanoid";

const PostEdit = (props) => {
  let details;
  const { data } = useContext(PostContext);

  const params = useParams();

  if (!data) {
    return;
  }

  details = data.find((elem) => elem.id === params.id);
  // console.log(params.id, "params.id");
  return (
    <React.Fragment>
      <div className="post-edit">
        {details && (
          <div id={details.id} className={props.type + "-wrapper"}>
            <div className="post-edit-header">
              <CardTitle key={nanoid(5)} title={"Редактировать публикацию"} />
              <ButtonClose
                key={nanoid(5)}
                text={"Х"}
                type={props.type + "-header__btn-close"}
                url={`/ra-router-crud/posts/${params.id}`}
              />
            </div>

            <div key={nanoid(5)} className={props.type + "__content"}>
              <Image
                key={nanoid(5)}
                url={details.avatar}
                className={props.type + "-image"}
              />
              <CardText key={nanoid(5)} text={details.title} />
            </div>
            <Form key={nanoid(8)} type={"card-edit"} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default PostEdit;

import React from "react";
import { Button, ButtonClose, Image, CardText } from "../Atoms/Atoms";
import witchDateTimePretty from "../HOCs/DateTimePretty";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import PostContext from "../../Context/PostContext";
import { nanoid } from "nanoid";

const PostsView = (props) => {
  // console.log(props, "view");
  let details;
  const { data, onClickDelete } = useContext(PostContext);
  const navigate = useNavigate();
  const params = useParams();
  if (!data) {
    return;
  }

  details = data.find((elem) => elem.id === params.id);

  return (
    <React.Fragment>
      {details && (
        <div id={details.id} className={props.type + "-wrapper"}>
          <div className="post-view-header">
            <Image
              key={nanoid(5)}
              url={details.avatar}
              className={props.type + "-image"}
            />

            <CardText key={nanoid(5)} text={details.author} />
            <CardTextHOC key={nanoid(5)} text={details.created} />
          </div>

          <ButtonClose
            key={nanoid(5)}
            text={"Х"}
            type={props.type + "-header__btn-close"}
            url={"/ra-router-crud"}
          />

          <div key={nanoid(5)} className={props.type + "-view__content"}>
            <CardText key={nanoid(5)} text={details.title} />
            <div className={props.type + "-btns__block"}>
              <Link
                key={nanoid(5)}
                to={`/ra-router-crud/posts/${params.id}/edit`}
                className={props.type + "-link"}
              >
                <Button
                  key={nanoid(5)}
                  text={"Редактировать"}
                  type={props.type + "__btn-edit "}
                />
              </Link>
              <Button
                key={nanoid(5)}
                text={"Удалить"}
                type={props.type + "__btn-remove"}
                clickHandler={() => {
                  onClickDelete(params.id);
                  navigate("/ra-router-crud");
                }}
              />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PostsView;
/***/

const CardTextHOC = witchDateTimePretty(CardText);

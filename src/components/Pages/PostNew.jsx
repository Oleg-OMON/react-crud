import React from "react";
import { Button,  ButtonClose} from "../Atoms/Atoms";
import Form from "../Form/Form";
import { nanoid } from "nanoid";


const PostsNew = (props) => {
 // console.log(props, "newProps");

  return (
    <React.Fragment>
      <div className={props.type + "-wrapper"}>
        <div key={nanoid(5)} className="post-new-header__btns-block">
          <Button
            key={nanoid(5)}
            text={"Публикация"}
            type={props.type + "-header__btn"}
          >
            {props.children}
          </Button>
          <Button
            key={nanoid(5)}
            text={"Фото/Видео"}
            type={props.type + "-header__btn "}
          />
          <Button
            key={nanoid(5)}
            text={"Прямой эфир"}
            type={props.type + "-header__btn"}
          />
          <Button
            key={nanoid(5)}
            text={"Ещё..."}
            type={props.type + "-header__btn"}
          />
          <ButtonClose
            key={nanoid(5)}
            text={"Х"}
            type={props.type + "-header__btn-close"}
            url={"/ra-router-crud"}
          />
        </div>
        <div key={nanoid(5)} className={props.type +"__content"}>
        <Form key={nanoid(5)} type={props.type}/>
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default PostsNew;

/* */

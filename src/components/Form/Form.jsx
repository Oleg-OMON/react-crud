import React, { useRef } from "react";
import { useContext } from "react";
import PostContext from "../../Context/PostContext";
import { Button, Text, Textarea } from "../Atoms/Atoms";
import { useNavigate, useParams } from "react-router-dom";





const Form = (data) => {
  const content = {
    userName: "John Doe",
    author_id: usid.rand(8),
    post: undefined,
  };
  const {USID} = require("usid");
  const usid = new USID();

  //console.log(data, "form");
  const inputRef = useRef();
  const tooltipeRef = useRef();
  const context = useContext(PostContext);
  const params = useParams();
  const navigate = useNavigate();
  tooltipeRef.current = document.querySelector(".tooltipe__text");

  const { type } = data;
 
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputRef.current || inputRef.current.value === "") {
      tooltipeRef.current.style["visibility"] = "visible";

      return null;
    }
    tooltipeRef.current.style["visibility"] = "hidden";
    content.title = inputRef.current.value;
    const request = context.data.find((o) => o.id === params.id);
    if (request) request.title = inputRef.current.value;
    const data = params.id
      ? context.data.find((o) => o.id === params.id)
      : content;
    context.handleAdd(data);
    inputRef.current.value = "";
    navigate("/ra-router-crud");
  };

  const handleInput = (event) => {
    event.preventDefault();
    inputRef.current = event.target;
  };

  return (
    <React.Fragment>
      <div className="form-field-wrapper">
        <form onSubmit={handleSubmit} className={type + "-forms"}>
          <Textarea
            key={usid.rand()}
            className={type + "-forms-message"}
            name={type + "-message"}
            label={"Новое сообщение"}
            type="text"
            onChange={handleInput}
            placeholder="Напишите что-нибудь..."
            value=""
          />
          <Text
            ref={tooltipeRef}
            key={usid.rand()}
            className={data.type + "-form-tooltipe tooltipe"}
            text={"*Заполните поле!"}
          />

          <Button
            key={usid.rand()}
            id={usid.rand()}
            type={type + "-form-add__btn"}
            text={""}
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;

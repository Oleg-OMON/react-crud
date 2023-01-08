import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";



export const Li = ({ id, className, children }) => {
const {USID} = require("usid");
const usid = new USID();

  return (
    <React.Fragment>
      <li id={id} className={className + "-item item-list"} key={usid.rand()}>
        <div className={className + "-item-wrap"} key={usid.rand()}>
          {React.Children.map(children, (child) => {
            return child;
          })}
        </div>
      </li>
    </React.Fragment>
  );
};

export const CardTitle = ({ title }) => {
  return (
    <>
      <h5 className="card-title">{title}</h5>
    </>
  );
};
CardTitle.propTypes = {
  title: PropTypes.string,
};

export const CardText = ({ text, type }) => {

  return (
    <>
      <div className={type ? type + "-card-text" : "card-text"}>{text}</div>
    </>
  );
};
CardText.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};



export const Button = (props) => {
  

  return (
    <>
      <button
        id={props.id}
        className={props.type}
        //onClick={props.clickHandler ? () => props.clickHandler(props.id) : null}
        onClick={props.clickHandler}
        style={props.btnStyle}
      >
        {props.text}
      </button>
    </>
  );
};

/**BtnClose*/
export const ButtonClose = ({ url, type, text }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <button className={type} onClick={() => navigate(url)}>
        {text}
      </button>
    </React.Fragment>
  );
};

/**Текст */

export const Text = React.forwardRef((data, ref) => {
  //console.log(data, "text");
  if (!data) {
    return null;
  }
  return (
    <React.Fragment>
      <span ref={ref} className={data.className}>
        {data.text}
      </span>
    </React.Fragment>
  );
});

/**Поле ввода в форме поиска */

export const Input = React.forwardRef((data, ref) => {
  //console.log(data);
  return (
    <React.Fragment>
      <div className="input-wrapper">
        <input
          ref={ref}
          className={data.className + "__input"}
          type={data.type}
          name={data.name}
          onChange={data.onChange}
        />
        <label className="label" name={data.label}>
          {data.label}
        </label>
      </div>
    </React.Fragment>
  );
});

/**Поле ввода новой записи */

export const Textarea = React.forwardRef((data, ref) => {
  // console.log(data, "area");
  if (!data) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="textarea-wrapper">
        <textarea
          ref={ref}
          rows={5}
          cols={35}
          className={data.className + "__input"}
          type={data.type}
          name={data.name}
          onChange={data.onChange}
          placeholder={data.placeholder}
        />
        <label className="label" name={data.name}>
          {data.label}
        </label>
      </div>
    </React.Fragment>
  );
});

/**Текстовая ссылка */



export const Image = (props) => {
  return (
    <>
      <div className={props.className + "-wrap"}>
        <img className={props.className} src={props.url} alt="description" />
      </div>
    </>
  );
};

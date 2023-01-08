import React from "react";
import PropTypes from "prop-types";

import { format } from "date-fns";

const witchDateTimePretty = (Component) => {
  const HOCComponent = (props) => {
    const { text } = props;

    const transformPrettyTime = format(text, "dd/MMM/yyyy hh:mm:ss");

    return <Component {...props} text={transformPrettyTime} />;
  };
  HOCComponent.displayName = "transformDatetimeHOC";

  return HOCComponent;
};

witchDateTimePretty.propTypes = {
  dateTime: PropTypes.string.isRequired,
};

export default witchDateTimePretty;

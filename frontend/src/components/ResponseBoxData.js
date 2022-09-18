import React, { useState, useEffect, useId } from "react";
import PropTypes from "prop-types";
import { ShortAnsRes, Spacer } from "./index";

const ResponseBoxData = (props) => {
  const { question, type, description, response } = props;

  return (
    <div className="response-box p-4 mt-4">
      <p className="question-title mb-0">{question}</p>
      <p className="question-description">{`${response.length} ${
        response.length > 1 ? "responses" : "response"
      }`}</p>
      <Spacer className="mt-3" />
      <ShortAnsRes response={response} />
    </div>
  );
};

ResponseBoxData.propTypes = {};

export default ResponseBoxData;

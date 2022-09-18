import React, { useState, useEffect, useId } from "react";
import PropTypes from "prop-types";
import { FreeAnsRes, Spacer, RadioRes, NumberRes } from "./index";

const ResponseBoxData = (props) => {
  const { question, type, responses } = props;
  const responseTypeMap = {
    shortAns: <FreeAnsRes responses={responses} />,
    longAns: <FreeAnsRes responses={responses} />,
    radio: <RadioRes responses={responses} />,
    number: <NumberRes responses={responses} />,
  };

  return (
    <div className="response-box p-4 mt-4">
      <p className="question-title mb-0">{question}</p>
      <p className="question-description">{`${responses.length} ${
        responses.length > 1 ? "responses" : "response"
      }`}</p>
      <Spacer className="mt-3" />
      {responseTypeMap[type]}
    </div>
  );
};

ResponseBoxData.propTypes = {};

export default ResponseBoxData;

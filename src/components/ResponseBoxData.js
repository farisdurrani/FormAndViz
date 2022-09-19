import React, { useState, useEffect, useId } from "react";
import { FreeAnsRes, Spacer, RadioRes, NumberRes, CheckboxRes } from "./index";
import PropTypes from "prop-types";

const ResponseBoxData = (props) => {
  const { question, type, responses } = props;
  if (!question && !type) return null;

  const responseTypeMap = {
    shortAns: <FreeAnsRes responses={responses} />,
    longAns: <FreeAnsRes responses={responses} />,
    radio: <RadioRes responses={responses} />,
    select: <RadioRes responses={responses} />,
    number: <NumberRes responses={responses} />,
    checkbox: <CheckboxRes responses={responses} />,
    range: <NumberRes responses={responses} />,
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

ResponseBoxData.PropTypes = {
  question: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  responses: PropTypes.array.isRequired,
};

export default ResponseBoxData;

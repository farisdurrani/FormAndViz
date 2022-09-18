import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { ResponseBox } from "../components/index.js";
import Form from "react-bootstrap/Form";

const Fill = (props) => {
  const questions = [
    {
      question: "Can you attend?",
      description: "Enter",
      type: "radio",
      entries: ["Yes", "No", "Other:"],
      responseState: useState(),
    },
    {
      question: "What are the names of people attending?",
      type: "longAns",
      responseState: useState(),
    },
    {
      question: "How did you hear about this event?",
      type: "checkbox",
      entries: ["Website", "Friend", "Newsletter", "Advertisement"],
      responseState: useState(),
    },
    {
      question: "Do you have any dietary restrictions?",
      type: "select",
      entries: ["Vegan", "Vegetatian", "Halal", "Gluten-free"],
      responseState: useState(),
    },
  ];

  const onSubmit = () => {
    questions.forEach((e) => {
      console.log(e.responseState[0]);
    });
  };

  return (
    <Form id="fill">
      {questions.map((e, i) => (
        <ResponseBox
          question={e.question}
          type={e.type}
          entries={e.entries}
          response={e.responseState[0]}
          setResponse={e.responseState[1]}
          key={i}
        />
      ))}
      <Button className="mt-3" variant="primary" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
};

Fill.propTypes = {};

export default Fill;

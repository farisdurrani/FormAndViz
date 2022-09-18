import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { ResponseBox } from "../components/index.js";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

const Fill = (props) => {
  const questions = [
    {
      question: "Name",
      description: "Enter",
      type: "shortAns",
      responseState: useState(),
    },
    {
      question: "Email",
      type: "shortAns",
      responseState: useState(),
      validateFunction: (e) =>
        e.match(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        ),
      validatedState: useState(true),
      validateMsg: "Invalid email format",
    },
    {
      question: "Age",
      type: "shortAns",
      validateFunction: (e) => Number(e) >= 18 && Number(e) <= 100,
      validatedState: useState(true),
      validateMsg: "Must be between 18 and 100 years old",
      responseState: useState(),
    },
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
    {
      question: "What is your level of excitedness for the event? (0-100)",
      type: "range",
      responseState: useState(0),
    },
  ];

  const onSubmit = () => {
    questions.forEach((e) => {
      if (e.validatedState?.[0] === false) {
        toast.error("Please fix inputs");
        return;
      }
    });
  };

  return (
    <Form id="fill">
      {questions.map((e, i) => {
        return (
          <ResponseBox
            question={e.question}
            type={e.type}
            entries={e.entries}
            validateFunction={e.validateFunction}
            validateMsg={e.validateMsg}
            validated={e.validatedState?.[0]}
            setValidated={e.validatedState?.[1]}
            response={e.responseState[0]}
            setResponse={e.responseState[1]}
            key={i}
          />
        );
      })}
      <Button className="mt-3" variant="primary" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
};

Fill.propTypes = {};

export default Fill;

import React from "react";
import PropTypes from "prop-types";
import { ResponseBox } from "../components/index.js";
import Form from "react-bootstrap/Form";

const Fill = (props) => {
  return (
    <Form>
      <ResponseBox
        question="Can you attend?"
        description="Enter"
        type="radio"
        entries={["Yes", "No", "Other:"]}
      />
      <ResponseBox
        question="What are the names of people attending?"
        type="longAns"
      />
      <ResponseBox
        question="How did you hear about this event?"
        type="checkbox"
        entries={["Website", "Friend", "Newsletter", "Advertisement"]}
      />
        <ResponseBox
        question="Do you have any dietary restrictions?"
        type="checkbox"
        entries={["Website", "Friend", "Newsletter", "Advertisement"]}
      />
    </Form>
  );
};

Fill.propTypes = {};

export default Fill;

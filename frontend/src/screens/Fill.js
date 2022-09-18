import React from "react";
import PropTypes from "prop-types";
import { ResponseBox } from "../components/index.js";
import Form from "react-bootstrap/Form";

const Fill = (props) => {
  return (
    <Form>
      <ResponseBox question="Can you attend?" />
      <ResponseBox question="Can you attend?" />
    </Form>
  );
};

Fill.propTypes = {};

export default Fill;

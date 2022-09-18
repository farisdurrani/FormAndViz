import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import Form from "react-bootstrap/Form";

const DropDown = (props) => {
  const { options, onChange, defaultValue, isMulti } = props;

  return (
    <Form.Group className="form-select">
      <Select
        options={options}
        onChange={onChange}
        styles={dropdownStyes}
        defaultValue={defaultValue}
        isMulti={isMulti}
      />
    </Form.Group>
  );
};

DropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  isMulti: PropTypes.bool,
};

export default DropDown;

const dropdownStyes = {
  control: (base) => ({
    ...base,
    border: "none",
    backgroundColor: "transparent",
    fontSize: 18,
  }),
  menu: (base) => ({
    ...base,
    fontSize: 18,
  }),
};

import React from "react";

const UISelect = props => {
  const { id, labelText, name, value, onChange, getOptions, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <select
        className={error ? "custom-select invalid" : "custom-select"}
        name={name}
        id={id}
        onChange={onChange}
      >
        <option value="">Select {labelText}</option>
        {getOptions(props.array)}
      </select>
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
};

export default UISelect;

import React from "react";

const UISelect = props => {
  const { id, labelText, name, value, onChange, array, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <select
        className={error ? "custom-select invalid" : "custom-select"}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      >
        <option value="">Select {labelText}</option>
        {array.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
};

export default UISelect;

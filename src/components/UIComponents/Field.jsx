import React from "react";
import { observer } from "mobx-react";

const Field = props => {
  const {
    id,
    labelText,
    type,
    placeholder,
    name,
    value,
    onChange,
    onBlur,
    error
  } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        className={error ? "form-control invalid" : "form-control"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
};

export default observer(Field);

import React from "react";
import Field from "../UIComponents/Field";

const Basic = props => {
  return (
    <React.Fragment>
      <Field
        id="firstname"
        labelText="Firstname"
        type="text"
        placeholder="Enter username"
        name="firstname"
        value={props.values.firstname}
        onChange={props.onChange}
        error={props.errors.firstname}
      />
      <Field
        id="lastname"
        labelText="Lastname"
        type="text"
        placeholder="Enter lastname"
        name="lastname"
        value={props.values.lastname}
        onChange={props.onChange}
        error={props.errors.lastname}
      />

      <Field
        id="password"
        labelText="Password"
        type="password"
        placeholder="Enter Password"
        name="password"
        value={props.values.password}
        onChange={props.onChange}
        error={props.errors.password}
      />

      <Field
        id="password"
        labelText="Repeat password"
        type="password"
        placeholder="Repeat password"
        name="repeatPassword"
        value={props.values.repeatPassword}
        onChange={props.onChange}
        error={props.errors.repeatPassword}
      />

      <div className="form-group">
        <label>Gender</label>
        <div className="form-check">
          <input
            checked={props.values.gender === "male"}
            type="radio"
            className="form-check-input"
            name="gender"
            id="male"
            value="male"
            onChange={props.onChange}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="form-check">
          <input
            checked={props.values.gender === "female"}
            type="radio"
            className="form-check-input"
            name="gender"
            id="female"
            value="female"
            onChange={props.onChange}
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Basic;

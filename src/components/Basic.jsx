import React from "react";

const Basic = props => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label>Firstname</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          name="firstname"
          onChange={props.onChange}
          value={props.values.firstname}
        />
        {props.errors.firstname ? (
          <div className="invalid-feedback">{props.errors.firstname}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Lastname</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          name="lastname"
          onChange={props.onChange}
        />
        {props.errors.lastname ? (
          <div className="invalid-feedback">{props.errors.lastname}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          onChange={props.onChange}
        />
        {props.errors.password ? (
          <div className="invalid-feedback">{props.errors.password}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Repeat password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter repeat password"
          name="repeatPassword"
          onChange={props.onChange}
        />
        {props.errors.repeatPassword ? (
          <div className="invalid-feedback">{props.errors.repeatPassword}</div>
        ) : null}
      </div>
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

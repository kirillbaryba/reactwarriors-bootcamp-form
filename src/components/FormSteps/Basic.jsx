import React from "react";
import Field from "../UIComponents/Field";
import { observer } from "mobx-react";

class Test extends React.PureComponent {
  render() {
    return <div>sdfsdfs</div>;
  }
}

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
        onBlur={props.onBlur}
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
        onBlur={props.onBlur}
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
        onBlur={props.onBlur}
      />

      <Field
        id="repeatPassword"
        labelText="Repeat password"
        type="password"
        placeholder="Repeat password"
        name="repeatPassword"
        value={props.values.repeatPassword}
        onChange={props.onChange}
        error={props.errors.repeatPassword}
        onBlur={props.onBlur}
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
      <Test values={props.values} />
    </React.Fragment>
  );
};

export default observer(Basic);

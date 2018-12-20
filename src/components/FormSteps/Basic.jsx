import React from "react";
import Field from "../UIComponents/Field";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  values: formStore.values,
  onChange: formStore.onChange,
  onBlur: formStore.onBlur,
  errors: formStore.errors
}))
@observer
class Basic extends React.Component {
  render() {
    const { values, onChange, onBlur, errors } = this.props;
    return (
      <React.Fragment>
        <Field
          id="firstname"
          labelText="Firstname"
          type="text"
          placeholder="Enter username"
          name="firstname"
          value={values.firstname}
          onChange={onChange}
          error={errors.firstname}
          onBlur={onBlur}
        />
        <Field
          id="lastname"
          labelText="Lastname"
          type="text"
          placeholder="Enter lastname"
          name="lastname"
          value={values.lastname}
          onChange={onChange}
          error={errors.lastname}
          onBlur={onBlur}
        />

        <Field
          id="password"
          labelText="Password"
          type="password"
          placeholder="Enter Password"
          name="password"
          value={values.password}
          onChange={onChange}
          error={errors.password}
          onBlur={onBlur}
        />

        <Field
          id="repeatPassword"
          labelText="Repeat password"
          type="password"
          placeholder="Repeat password"
          name="repeatPassword"
          value={values.repeatPassword}
          onChange={onChange}
          error={errors.repeatPassword}
          onBlur={onBlur}
        />

        <div className="form-group">
          <label>Gender</label>
          <div className="form-check">
            <input
              checked={values.gender === "male"}
              type="radio"
              className="form-check-input"
              name="gender"
              id="male"
              value="male"
              onChange={onChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="form-check">
            <input
              checked={values.gender === "female"}
              type="radio"
              className="form-check-input"
              name="gender"
              id="female"
              value="female"
              onChange={onChange}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Basic;

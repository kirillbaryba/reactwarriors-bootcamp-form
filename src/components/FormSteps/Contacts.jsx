import React from "react";
import Field from "../UIComponents/Field";
import UISelect from "../UIComponents/UISelect";
import { inject, observer } from "mobx-react";
import countries from "../../data/countries";

@inject(({ formStore }) => ({
  values: formStore.values,
  onChange: formStore.onChange,
  onBlur: formStore.onBlur,
  getCities: formStore.getCities,
  errors: formStore.errors,
  handleCityChange: formStore.handleCityChange,
  handleCountryChange: formStore.handleCountryChange
}))
@observer
class Contacts extends React.Component {
  render() {
    const {
      values,
      onChange,
      errors,
      onBlur,
      handleCountryChange,
      handleCityChange,
      getCities
    } = this.props;
    return (
      <React.Fragment>
        <Field
          id="email"
          labelText="Email"
          type="text"
          placeholder="Enter email"
          name="email"
          value={values.email}
          onChange={onChange}
          error={errors.email}
          onBlur={onBlur}
        />
        <Field
          id="mobile"
          labelText="Mobile"
          type="text"
          placeholder="Enter mobile phone"
          name="mobile"
          value={values.mobile}
          onChange={onChange}
          error={errors.mobile}
          onBlur={onBlur}
        />
        <UISelect
          id="country"
          labelText="Country"
          name="country"
          value={values.country}
          error={errors.country}
          onChange={handleCountryChange}
          onBlur={onBlur}
          array={countries}
        />
        <UISelect
          id="city"
          labelText="City"
          name="city"
          value={values.city}
          array={getCities}
          error={errors.city}
          onChange={handleCityChange}
          onBlur={onBlur}
        />
      </React.Fragment>
    );
  }
}

export default Contacts;

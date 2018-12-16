import React from "react";
import Field from "../UIComponents/Field";
import UISelect from "../UIComponents/UISelect";
import cities from "../../data/cities";
import countries from "../../data/countries";

class Contacts extends React.PureComponent {
  getCities = (citiesObj, selectedCountry) => {
    const currentCities = [];
    for (const key in citiesObj) {
      if (String(selectedCountry) === String(citiesObj[key].country)) {
        currentCities.push({ id: key, name: citiesObj[key].name });
      }
    }
    return currentCities;
  };

  buildSelect = array => {
    return array.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <Field
          id="email"
          labelText="Email"
          type="text"
          placeholder="Enter email"
          name="email"
          value={this.props.values.email}
          onChange={this.props.onChange}
          error={this.props.errors.email}
          onBlur={this.props.onBlur}
        />
        <Field
          id="mobile"
          labelText="Mobile"
          type="text"
          placeholder="Enter mobile phone"
          name="mobile"
          value={this.props.values.mobile}
          onChange={this.props.onChange}
          error={this.props.errors.mobile}
          onBlur={this.props.onBlur}
        />
        <UISelect
          id="country"
          labelText="Country"
          name="country"
          value={this.props.values.country}
          array={countries}
          getOptions={this.buildSelect}
          error={this.props.errors.country}
          onChange={this.props.handleCountryChange}
          onBlur={this.props.onBlur}
        />
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className={
              this.props.errors.city ? "custom-select invalid" : "custom-select"
            }
            name="city"
            id="city"
            value={this.props.values.city}
            onChange={this.props.handleCityChange}
            onBlur={this.props.onBlur}
          >
            <option value="">Select City</option>
            {this.buildSelect(
              this.getCities(cities, this.props.values.country)
            )}
          </select>
          {this.props.errors.city ? (
            <div className="invalid-feedback">{this.props.errors.city}</div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;

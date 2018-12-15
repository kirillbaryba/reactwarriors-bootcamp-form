import React from "react";
import cities from "../data/cities";
import countries from "../data/countries";

class Contacts extends React.PureComponent {
  getCountries = countries => {
    return countries.map(country => (
      <option key={country.id} value={country.id}>
        {country.name}
      </option>
    ));
  };

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
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={this.props.onChange}
          />
          {this.props.errors.email ? (
            <div className="invalid-feedback">{this.props.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter mobile phone"
            name="mobile"
            onChange={this.props.onChange}
          />
          {this.props.errors.mobile ? (
            <div className="invalid-feedback">{this.props.errors.mobile}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            className="custom-select"
            name="country"
            id="country"
            onChange={this.props.handleCountryChange}
          >
            <option value="">Select Country</option>
            {this.getCountries(countries)}
          </select>
          {this.props.errors.country ? (
            <div className="invalid-feedback">{this.props.errors.country}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className="custom-select"
            name="city"
            id="city"
            value={this.props.values.city}
            onChange={this.props.handleCityChange}
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

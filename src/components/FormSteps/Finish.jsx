import React from "react";
import cities from "../../data/cities";
import countries from "../../data/countries";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  values: formStore.values,
  getUserCountry: formStore.getUserCountry
}))
@observer
class Finish extends React.Component {
  render() {
    const { values, getUserCountry } = this.props;
    const cityName = cities[values.city].name;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img
                src={values.avatar}
                alt={values.firstname}
                className="mb-4 w-100"
              />
            </div>
            <div className="col-8">
              <div>
                {values.firstname} {values.lastname}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div>
                <b>Email: </b>
                {values.email}
              </div>
              <div>
                <b>Mobile: </b>
                {values.mobile}
              </div>
              <div>
                <b>Location: </b>
                {getUserCountry}, {cityName}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Finish;

import React from "react";
import cities from "../../data/cities";
import countries from "../../data/countries";

const getUserCountry = (array, currentCountry) => {
  const country = countries.filter(
    c => String(c.id) === String(currentCountry)
  );
  return country[0].name;
};

const Finish = props => {
  const cityName = cities[props.values.city].name;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img
              src={props.values.avatar}
              alt={props.values.firstname}
              className="mb-4 w-100"
            />
          </div>
          <div className="col-8">
            <div>
              {props.values.firstname} {props.values.lastname}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div>
              <b>Email: </b>
              {props.values.email}
            </div>
            <div>
              <b>Mobile: </b>
              {props.values.mobile}
            </div>
            <div>
              <b>Location: </b>
              {getUserCountry(countries, props.values.country)},
               {cityName}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Finish;

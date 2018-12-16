import React from "react";
import cities from "../../data/cities";
import countries from "../../data/countries";

const Finish = props => {
  const country = countries.filter(
    c => String(c.id) === String(props.values.country)
  );
  let city = "";
  for (const key in cities) {
    country.map(c => {
      if (String(c.id) === String(cities[key].country)) {
        city = cities[props.values.city].name;
        return city;
      }
    });
  }

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
              {country.map(c => c.name)}, {city}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Finish;

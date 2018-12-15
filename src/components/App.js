import React from "react";
import Steps from "../components/Steps";
import Basic from "./Basic";
import Contacts from "./Contacts";
import Avatar from "./Avatar";
import Finish from "./Finish";
import Buttons from "./Buttons";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeStep: 0,
      values: {
        firstname: "spade",
        lastname: "spade",
        password: "123123",
        repeatPassword: "123123",
        gender: "female",
        country: "",
        city: "",
        mobile: "5555555555",
        avatar: "",
        email: ""
      },
      steps: [
        {
          isActive: true,
          isCompleted: false,
          name: "Basic"
        },
        {
          isActive: false,
          isCompleted: false,
          name: "Contacts"
        },
        {
          isActive: false,
          isCompleted: false,
          name: "Avatar"
        },
        {
          isActive: false,
          isCompleted: false,
          name: "Finish"
        }
      ],
      errors: {}
    };
  }

  handleCountryChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        country: e.target.value
      }
    });
  };

  handleCityChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        city: e.target.value
      }
    });
  };

  validateMobileNumber = number => {
    const pattern = /^[7-9][0-9]{9}$/;
    if (pattern.test(number)) {
      return true;
    }
    return false;
  };

  validateEmail = email => {
    const mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (mailFormat.test(email)) {
      return true;
    }
    return false;
  };

  resetAllInfo = () => {
    this.setState({
      activeStep: 1,
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "",
        country: "",
        city: "",
        mobile: "",
        avatar: "",
        email: ""
      }
    });
  };

  validateValues = () => {
    const { activeStep, values } = this.state;
    const errors = {};

    if (activeStep === 0) {
      if (values.firstname.length < 5) {
        errors.firstname = "Must be 5 characters or more";
      }
      if (values.lastname.length < 5) {
        errors.lastname = "Must be 5 characters or more";
      }
      if (values.password.length < 6) {
        errors.password = "Must be 6 characters or more";
      }
      if (values.password !== values.repeatPassword) {
        errors.repeatPassword = "Must be equal password";
      }
    }

    if (activeStep === 1) {
      if (!this.validateEmail(values.email)) {
        errors.email = "Email is invalid";
      }
      if (values.email.length === 0) {
        errors.email = "Email is required";
      }

      if (values.mobile.length === 0) {
        errors.mobile = "Mobile is required";
      }

      if (!this.validateMobileNumber(values.mobile)) {
        errors.mobile = "mobile is wrong format";
      }

      if (values.country === "") {
        errors.country = "Required";
      }

      if (values.city === "") {
        errors.city = "Required";
      }
    }
    if (activeStep === 2) {
      if (values.avatar.length === 0) {
        errors.avatar = "Avatar is required";
      }
    }
    return errors;
  };

  handleNextStep = () => {
    const { activeStep } = this.state;
    const errors = this.validateValues();
    if (Object.keys(errors).length !== 0) {
      const newSteps = [...this.state.steps];
      const newActiveSteps = activeStep + 1;
      newSteps[activeStep].isActive = false;
      newSteps[newActiveSteps].isActive = true;
      newSteps[activeStep].isCompleted = true;
      this.setState({
        errors
      });
    } else {
      this.setState({
        activeStep: activeStep + 1,
        errors: {}
      });
    }
  };

  handlePrevStep = () => {
    const { activeStep, steps } = this.state;

    const newSteps = [...steps];
    const newActiveSteps = activeStep - 1;
    newSteps[activeStep].isActive = false;
    newSteps[newActiveSteps].isActive = true;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  onChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    });
  };

  onChangeAvatar = event => {
    const reader = new FileReader();

    reader.onload = event => {
      this.onChange({
        target: {
          name: "avatar",
          value: event.target.result
        }
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  componentDidUpdate(prevProps, prevState) {
    const { values } = this.state;
    if (prevState.values.avatar !== values.avatar) {
      this.setState({
        errors: {}
      });
    }
  }

  render() {
    const { activeStep, errors, values, steps } = this.state;
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Steps steps={steps} activeStep={activeStep} />
          {activeStep === 0 ? (
            <Basic onChange={this.onChange} values={values} errors={errors} />
          ) : (
            false
          )}
          {activeStep === 1 ? (
            <Contacts
              onChange={this.onChange}
              values={values}
              handleCountryChange={this.handleCountryChange}
              handleCityChange={this.handleCityChange}
              errors={errors}
              validateEmail={this.validateEmail}
            />
          ) : (
            false
          )}
          {activeStep === 2 ? (
            <Avatar
              onChangeAvatar={this.onChangeAvatar}
              values={values}
              errors={errors}
            />
          ) : (
            false
          )}
          {activeStep === 3 ? <Finish values={values} /> : false}
        </form>
        <Buttons
          activeStep={activeStep}
          resetAllInfo={this.resetAllInfo}
          handleNextStep={this.handleNextStep}
          validateValues={this.validateValues}
          handlePrevStep={this.handlePrevStep}
        />
      </div>
    );
  }
}

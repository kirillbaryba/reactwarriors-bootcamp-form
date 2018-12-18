import React from "react";
import Steps from "./FormHeader/Steps";
import Basic from "./FormSteps/Basic";
import Contacts from "./FormSteps/Contacts";
import Avatar from "./FormSteps/Avatar";
import Finish from "./FormSteps/Finish";
import Buttons from "./FormBottomNav/Buttons";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  values: formStore.values,
  onChange: formStore.onChange
}))
@observer
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeStep: 0,
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "female",
        country: "",
        city: "",
        mobile: "",
        avatar: "",
        email: "machulsky@gmail.com"
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

  onBlur = e => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: null
      }
    });
  };

  handleCountryChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        country: e.target.value
      },
      errors: {
        ...this.state.errors,
        country: ""
      }
    });
  };

  handleCityChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        city: e.target.value
      },
      errors: {
        ...this.state.errors,
        city: ""
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
      activeStep: 0,
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "female",
        country: "",
        city: "",
        mobile: "",
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
      ]
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
    const { activeStep, steps } = this.state;
    const errors = this.validateValues();
    if (Object.keys(errors).length !== 0) {
      this.setState({
        errors
      });
    } else {
      const newSteps = [...steps];
      newSteps[activeStep].isActive = false;
      newSteps[activeStep].isCompleted = true;
      const newActiveSteps = activeStep + 1;
      newSteps[newActiveSteps].isActive = true;
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
    newSteps[newActiveSteps].isCompleted = false;
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
    const { activeStep, errors, steps } = this.state;
    const { values, onChange } = this.props;
    console.log(values);
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Steps steps={steps} activeStep={activeStep} />
          {activeStep === 0 ? (
            <Basic
              onBlur={this.onBlur}
              onChange={onChange}
              values={values}
              errors={errors}
            />
          ) : (
            false
          )}
          {activeStep === 1 ? (
            <Contacts
              onBlur={this.onBlur}
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

export default App;

import { observable, action, computed } from "mobx";
import cities from "../data/cities";
import countries from "../data/countries";

export default class Store {
  @observable
  values = {
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
  };

  @observable
  activeStep = 0;

  @observable
  steps = [
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
  ];

  @observable
  errors = {
    firstname: false,
    lastname: false,
    email: false,
    avatar: false,
    mobile: false,
    password: false,
    repeatPassword: false,
    country: "",
    city: ""
  };

  @action
  onChange = event => {
    this.values[event.target.name] = event.target.value;
  };

  @action
  onBlur = event => {
    this.errors = {
      ...this.errors,
      [event.target.name]: false
    };
  };

  @action
  handleNextStep = () => {
    const errors = this.validateValues();
    if (Object.keys(errors).length !== 0) {
      this.errors = errors;
    } else {
      const newSteps = this.steps;
      newSteps[this.activeStep].isActive = false;
      newSteps[this.activeStep].isCompleted = true;
      const newActiveSteps = this.activeStep + 1;
      newSteps[newActiveSteps].isActive = true;
      this.steps = newSteps;
      this.activeStep += 1;
    }
  };

  @action
  handlePrevStep = () => {
    const newSteps = this.steps;
    const newActiveSteps = this.activeStep - 1;
    newSteps[this.activeStep].isActive = false;
    newSteps[newActiveSteps].isCompleted = false;
    newSteps[newActiveSteps].isActive = true;
    this.activeStep -= 1;
  };

  validateValues = () => {
    const errors = {};

    if (this.activeStep === 0) {
      if (this.values.firstname.length < 5) {
        errors.firstname = "Must be 5 characters or more";
      }
      if (this.values.lastname.length < 5) {
        errors.lastname = "Must be 5 characters or more";
      }
      if (this.values.password.length < 6) {
        errors.password = "Must be 6 characters or more";
      }
      if (this.values.password !== this.values.repeatPassword) {
        errors.repeatPassword = "Must be equal password";
      }
    }

    if (this.activeStep === 1) {
      if (!this.validateEmail(this.values.email)) {
        errors.email = "Email is invalid";
      }
      if (this.values.email.length === 0) {
        errors.email = "Email is required";
      }

      if (this.values.mobile.length === 0) {
        errors.mobile = "Mobile is required";
      }

      if (!this.validateMobileNumber(this.values.mobile)) {
        errors.mobile = "mobile is wrong format";
      }

      if (this.values.country === "") {
        errors.country = "Required";
      }

      if (this.values.city === "") {
        errors.city = "Required";
      }
    }
    if (this.activeStep === 2) {
      if (this.values.avatar.length === 0) {
        errors.avatar = "Avatar is required";
      }
    }
    return errors;
  };

  @action
  handleCountryChange = e => {
    this.values = {
      ...this.values,
      country: e.target.value
    };

    this.errors = {
      ...this.errors,
      country: ""
    };
  };

  @action
  handleCityChange = e => {
    this.values = {
      ...this.values,
      city: e.target.value
    };

    this.errors = {
      ...this.errors,
      city: ""
    };
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

  @action
  resetAllInfo = () => {
    this.values = {
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
    };
    this.activeStep = 0;
    this.steps = [
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
    ];
  };

  @action
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

    this.errors = {};
  };

  @computed get getCities() {
    return Object.entries(cities).reduce((acc, currValue) => {
      if (Number(this.values.country) === Number(currValue[1].country)) {
        acc.push({ id: currValue[0], name: currValue[1].name });
      }
      return acc;
    }, []);
  }

  @computed get getUserCountry() {
    const country = countries.filter(
      c => String(c.id) === String(this.values.country)
    );
    return country[0].name;
  }
}

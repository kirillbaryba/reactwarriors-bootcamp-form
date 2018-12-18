import { observable, action } from "mobx";

export default class Store {
  @observable
  values = {
    firstname: "Evgeniy",
    lastname: "",
    password: "",
    repeatPassword: "",
    gender: "female",
    country: "",
    city: "",
    mobile: "",
    avatar: "",
    email: "machulsky@gmail.com"
  };

  @action
  onChange = event => {
    this.values[event.target.name] = event.target.value;
  };
}

import React from "react";
import Steps from "./FormHeader/Steps";
import Basic from "./FormSteps/Basic";
import Contacts from "./FormSteps/Contacts";
import Avatar from "./FormSteps/Avatar";
import Finish from "./FormSteps/Finish";
import Buttons from "./FormBottomNav/Buttons";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  activeStep: formStore.activeStep
}))
@observer
class App extends React.Component {
  render() {
    const { activeStep } = this.props;
    return (
      <div className="form-container card">
        <Steps />
        <form className="form card-body">
          {activeStep === 0 && <Basic />}
          {activeStep === 1 && <Contacts />}
          {activeStep === 2 && <Avatar />}
          {activeStep === 3 && <Finish />}
        </form>
        <Buttons />
      </div>
    );
  }
}

export default App;

import React from "react";
import classNames from "classnames";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  steps: formStore.steps
}))
@observer
class Steps extends React.Component {
  getStepClassName = step => {
    const { steps } = this.props;
    return classNames("step", {
      "is-active": steps[step].isActive,
      "is-completed": steps[step].isCompleted
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="steps mt-4">
          <div className={this.getStepClassName(0)}>
            <div className="step__marker">1</div>
            <div className="step__title">Basic</div>
          </div>
          <div className={this.getStepClassName(1)}>
            <div className="step__marker">2</div>
            <div className="step__title">Contacts</div>
          </div>
          <div className={this.getStepClassName(2)}>
            <div className="step__marker">3</div>
            <div className="step__title">Avatar</div>
          </div>
          <div className={this.getStepClassName(3)}>
            <div className="step__marker">4</div>
            <div className="step__title">Finish</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Steps;

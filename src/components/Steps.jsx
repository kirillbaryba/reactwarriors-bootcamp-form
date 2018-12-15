// import React from "react";

// const Steps = props => {
//   console.log(props);
//   return (
//     <React.Fragment>
//       <div className="steps mb-4">
//         <div
//           className={
//             props.activeStep === 1 ? "step is-active" : "step is-completed"
//           }
//         >
//           <div className="step__marker">1</div>
//           <div className="step__title">Basic</div>
//         </div>
//         <div
//           className={props.step === 2 ? "step is-active" : "step is-completed"}
//         >
//           <div className="step__marker">2</div>
//           <div className="step__title">Contacts</div>
//         </div>
//         <div
//           className={props.step === 3 ? "step is-active" : "step is-completed"}
//         >
//           <div className="step__marker">3</div>
//           <div className="step__title">Avatar</div>
//         </div>
//         <div
//           className={props.step === 4 ? "step is-active" : "step is-completed"}
//         >
//           <div className="step__marker">4</div>
//           <div className="step__title">Finish</div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Steps;

import React, { Component } from "react";
import classNames from "classnames";

class Steps extends Component {
  handleClick = step => e => {
    e.preventDefault();

    this.props.changeStep(step);
  };

  getStepClassName = step => {
    return classNames("step", {
      "is-active": this.props.steps[step].isActive,
      "is-completed": this.props.steps[step].isCompleted
    });
  };
  render() {
    const { steps } = this.props;
    console.log(this.props);
    return (
      <div className="steps mb-4">
        {steps.map((step, index) => (
          <div key={step.name} className={this.getStepClassName(index)}>
            <div className="step__marker">{index + 1}</div>
            <div className="step__title mt-1">{step.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Steps;

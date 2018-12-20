import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  handleNextStep: formStore.handleNextStep,
  handlePrevStep: formStore.handlePrevStep,
  activeStep: formStore.activeStep,
  resetAllInfo: formStore.resetAllInfo
}))
@observer
class Buttons extends React.Component {
  render() {
    const {
      activeStep,
      resetAllInfo,
      handleNextStep,
      validateValues,
      handlePrevStep
    } = this.props;
    return (
      <div
        className="d-flex justify-content-center mb-4"
        role="group"
        aria-label="Basic example"
      >
        {activeStep === 3 ? (
          <button
            className="btn btn-warning"
            type="button"
            onClick={resetAllInfo}
          >
            Reset
          </button>
        ) : (
          <React.Fragment>
            <button
              className="btn btn-primary mr-2"
              type="button"
              onClick={handlePrevStep}
              disabled={activeStep === 0}
            >
              Prev
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => handleNextStep(validateValues)}
            >
              Next
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

Buttons.propTypes = {
  activeStep: PropTypes.number,
  resetAllInfo: PropTypes.func,
  handleNextStep: PropTypes.func,
  validateValues: PropTypes.func,
  handlePrevStep: PropTypes.func
};

export default Buttons;

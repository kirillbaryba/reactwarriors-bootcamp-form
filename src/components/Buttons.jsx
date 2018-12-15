import React from "react";
import PropTypes from "prop-types";

const Buttons = props => {
  Buttons.propTypes = {
    activeStep: PropTypes.number,
    resetAllInfo: PropTypes.func,
    handleNextStep: PropTypes.func,
    validateValues: PropTypes.func,
    handlePrevStep: PropTypes.func
  };

  const {
    activeStep,
    resetAllInfo,
    handleNextStep,
    validateValues,
    handlePrevStep
  } = props;
  
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
};

export default Buttons;

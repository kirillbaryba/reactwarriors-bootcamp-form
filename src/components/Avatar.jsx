import React from "react";

const Avatar = props => {
  return (
    <React.Fragment>
      <img
        src={
          props.values.avatar.length === 0
            ? "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png"
            : props.values.avatar
        }
        className="mb-4 w-100"
        alt={props.values.firstname}
      />
      <div className="input-group mb-3">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="avatar"
            name="avatar"
            onChange={props.onChangeAvatar}
          />
          <label
            className={
              props.errors.avatar
                ? "custom-file-label invalid"
                : "custom-file-label"
            }
            htmlFor="avatar"
          >
            Choose file
          </label>
        </div>
        {props.errors.avatar ? (
          <div className="invalid-feedback">{props.errors.avatar}</div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Avatar;

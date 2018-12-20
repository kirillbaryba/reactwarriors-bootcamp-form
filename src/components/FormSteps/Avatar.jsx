import React from "react";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  values: formStore.values,
  errors: formStore.errors,
  onChangeAvatar: formStore.onChangeAvatar
}))
@observer
class Avatar extends React.Component {
  render() {
    const { values, errors, onChangeAvatar } = this.props;
    return (
      <React.Fragment>
        <img
          src={
            values.avatar.length === 0
              ? "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png"
              : values.avatar
          }
          className="mb-4 w-100"
          alt={values.firstname}
        />
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="avatar"
              name="avatar"
              onChange={onChangeAvatar}
            />
            <label
              className={
                errors.avatar
                  ? "custom-file-label invalid"
                  : "custom-file-label"
              }
              htmlFor="avatar"
            >
              Choose file
            </label>
          </div>
          {errors.avatar ? (
            <div className="invalid-feedback">{errors.avatar}</div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Avatar;

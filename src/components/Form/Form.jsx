import React from 'react';
import { Consumer } from '../AppContext';
import './form.scss';

export const Form = () => {
  return (
    <Consumer>
      {({ actions, form }) => {
        return (
          <div className="form__container">
            <form className="form" onSubmit={actions.submitFormChange}>
              <input
                id="form__input"
                className="form__input"
                type="text"
                name="searchinput"
                placeholder="Search Zip Code or City, State"
                onChange={actions.formChange}
                value={form.value}
              />
              <input className="form__submit" type="submit" value="Submit" />
            </form>
          </div>
        );
      }}
    </Consumer>
  );
};

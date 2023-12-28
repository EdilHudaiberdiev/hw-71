import {IDishes} from '../../types';
import React, {ChangeEvent} from 'react';

interface Props {
  OneDish: IDishes;
  onFormSubmit: (e: React.FormEvent) => void,
  changeForm:  (e: ChangeEvent<HTMLInputElement>) => void,
  titleForm: string
  btnText: string,
}
const DishSendForm: React.FC<Props> = ({OneDish, onFormSubmit, changeForm, titleForm, btnText}) => {

  return (
    <div>
      <form onSubmit={e => onFormSubmit(e)}>
        <h2 className="text-center mb-4">{titleForm}</h2>
        <div className="mb-3 w-75 mx-auto">
          <label htmlFor="name" className="form-label">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            value={OneDish.title}
            onChange={e => changeForm(e)}
          />
        </div>

        <div className="mb-3 w-75 mx-auto">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            className="form-control"
            value={OneDish.price}
            onChange={e => changeForm(e)}
          />
        </div>

        <div className="mb-3 w-75 mx-auto">
          <label htmlFor="photo" className="form-label">Photo</label>
          <input
            type="photo"
            name="photo"
            id="photo"
            className="form-control"
            value={OneDish.photo}
            onChange={e => changeForm(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">{btnText}</button>
      </form>
    </div>
  );
};

export default DishSendForm;
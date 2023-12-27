import {AppDispatch, RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import {IDishesForm} from '../../types';
import {addDish} from '../DishesThunk';
import Spinner from '../../Components/UI/Spinner/Spinner';

const AddNewDish = () => {

    const dispatch: AppDispatch = useDispatch();
    const Navigation = useNavigate();
    const isLoading = useSelector((state: RootState) => state.dishes.isLoading);
    const [OneDish, setOneDish] = useState<IDishesForm>({
        id: '',
        title: '',
        price: '',
        photo: '',
    });

  const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOneDish((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await dispatch(addDish(OneDish));
            Navigation('/');
        } catch (e) {
            alert('Something gone wrong');
        }
    };

    return (
        <>
          {isLoading ? <Spinner/> :

            <form onSubmit={e => onFormSubmit(e)}>
              <h2 className="text-center mb-4">Add new dish</h2>
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

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          }
      </>
    );
};

export default AddNewDish;
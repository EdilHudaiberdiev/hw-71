
import {IDishes} from '../../types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import {deleteDish, getDishes} from '../../Containers/DishesThunk';
import Spinner from '../UI/Spinner/Spinner';
import {useNavigate} from 'react-router-dom';

interface Props {
  dish: IDishes
}
const DishCard:React.FC<Props> = ({dish}) => {

  const isLoading = useSelector((state: RootState) => state.dishes.isLoading);
  const dispatch: AppDispatch = useDispatch();
  const Navigation = useNavigate();

  const deleteContactById = async (id: string) => {
    await dispatch(deleteDish(id));
    await dispatch(getDishes());
  };

  return (
    <>
    {isLoading ? <Spinner/> :
      <div key={dish.id} className={'border'}>
        <p>{dish.title}</p>
        <p>{dish.price}₽</p>
        <img
          width="100"
          height="100"
          src={dish.photo}
          alt={dish.title}
        />

        <button
          onClick={() => deleteContactById(dish.id)}
          type="button"
          className="ms-3 me-1 btn btn-danger"
        >Delete</button>

        <button
          onClick={() => Navigation(`/edit-dish/${dish.id}`)}
          type="button"
          className="btn btn-warning"
        >Edit</button>
      </div>
    }
    </>
  );
};

export default DishCard;
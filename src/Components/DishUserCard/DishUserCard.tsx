import React from 'react';
import {IDishes} from '../../types';
interface Props {
  dish: IDishes;
  addToCart: (dish: IDishes) => void;
}
const DishUserCard: React.FC<Props> = ({dish, addToCart}) => {
  return (
    <div className='border d-flex w-50 mx-auto my-3 p-3' onClick={() => addToCart(dish)}>
      <img
        width="100"
        height="100"
        className="me-2"
        src={dish.photo}
        alt={dish.title}
      />
      <div className="text-start">
        <p><b>{dish.title}</b></p>
        <p>{dish.price}₽</p>
      </div>
    </div>
  );
};

export default DishUserCard;
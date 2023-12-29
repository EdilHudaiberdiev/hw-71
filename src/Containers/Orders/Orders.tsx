import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import {getDishes, getOrders} from '../DishesThunk';

const Orders = () => {
  const dispatch: AppDispatch = useDispatch()
  const orders = useSelector((state: RootState) => state.dishes.orders);
  const dishes = useSelector((state: RootState) => state.dishes.dishes);

  useEffect(() => {
    if (dishes.length === 0) {
      dispatch(getDishes());
    } else {
      dispatch(getOrders());
    }

  }, [dispatch, dishes]);

  return orders && (
    <>
      {orders.map(orderItem => {
        return orderItem.order.map(orderDish => {
          if (orderDish.id) {
            return <p key={orderDish.id}>{dishes[orderDish.id].title}: {orderDish.count}</p>;
          }
        });
      })}
    </>
  );
};

export default Orders;
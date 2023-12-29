import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import DishUserCard from '../../Components/DishUserCard/DishUserCard';
import CustomModal from '../../Components/UI/CustomModal/CustomModal';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {IDishes} from '../../types';
import {getDishes, makeOrder} from '../DishesThunk';

const Home = () => {
  const dishes = useSelector((state: RootState) => state.dishes.dishes);
  const isLoading = useSelector((state: RootState) => state.dishes.isLoading);
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [total, setTotal] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [delivery] = useState(150);
  const dispatch: AppDispatch = useDispatch();


  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);

  const addToCart = (dish: IDishes) => {
    let copyCart = {...cart}
    if (dish.id) {
      if (copyCart[dish.id] === undefined) {
        copyCart[dish.id] = 1;
        setTotal(prevState => prevState + +dish.price);
      } else {
        copyCart[dish.id] = copyCart[dish.id] + 1;
        setTotal(prevState => prevState + +dish.price);
      }
      setCart(copyCart);
    }
  };

  const deleteDishFromCart = (dish: IDishes) => {
    let copyCart = {...cart}
    if (dish.id) {
      if (copyCart[dish.id] === 0) {
        delete copyCart[dish.id];
      } else {
        copyCart[dish.id] = copyCart[dish.id] - 1;
        setTotal(prevState => prevState - +dish.price);

        if (copyCart[dish.id] === 0) {
          delete copyCart[dish.id];
        }
      }
      setCart(copyCart);
    }
  };

  const dishesObjectToHtml = () => {
    return Object.entries(dishes).map(([key, value]) => (
      <DishUserCard key={key} dish={value} addToCart={addToCart}/>
    ));
  };

  const submitOrder = () => {
    dispatch(makeOrder({...cart}));
  };

  return (
    <>
      <div>
        {isLoading ? <Spinner/> :
          <>
            {dishesObjectToHtml()}
          </>
        }

        <hr/>
        {total === 0 && !modalOpen ?
          <p>Cart is empty. Add some order.</p>
          :
          <>
            <div className="position-sticky bottom-0 left-0 p-4">
              Order total without delivery: {total}
              <button className="btn btn-primary ms-3" onClick={() => setModalOpen(true)}>Checkout</button>
            </div>

            <CustomModal open={modalOpen} handleClose={() => setModalOpen(false)}>
              <div>
                <div>
                  {total > 0 ?
                    <>
                      {dishes.map(dish => {
                        if (dish.id) {
                          if (cart[dish.id] !== undefined) {
                            return (
                              <div className="border d-flex align-items-center justify-content-between mb-4"
                                   key={dish.id}>
                                <p className="m-0">{dish.title} - x{cart[dish.id]} / {cart[dish.id] * dish.price}</p>
                                <button
                                  className="btn-primary btn ms-4"
                                  onClick={() => deleteDishFromCart(dish)}
                                >X
                                </button>
                              </div>);
                          }
                        }
                      })}
                    </> :
                    <p>Cart is empty.</p>
                  }
                </div>
                <p><b>Delivery:</b> {delivery}</p>
                <p><b>Order total:</b> {total + delivery}</p>
                <div>
                  {total > 0 ? <button className="btn btn-success" onClick={submitOrder}>Order</button> : null}
                  <button
                    onClick={() => setModalOpen(false)}
                    type="button" className="ms-3 btn btn-danger"
                  >Go back
                  </button>
                </div>
              </div>
            </CustomModal>
          </>

        }
      </div>
    </>
  );
};

export default Home;
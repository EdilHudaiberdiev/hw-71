import {AppDispatch, RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getDishes} from '../DishesThunk';
import Spinner from '../../Components/UI/Spinner/Spinner';

const Home = () => {


  const dishes = useSelector((state: RootState) => state.dishes.dishes);
  const isLoading = useSelector((state: RootState) => state.dishes.isLoading);
  const dispatch: AppDispatch = useDispatch();


  useEffect(() => {
    dispatch(getDishes());
    console.log( dispatch(getDishes()))
  }, [dispatch]);

    return (
        <>
          {isLoading ? <Spinner/> :
            dishes.map(dish => (
                <div key={dish.id} className={dish.id}>
                  <p>{dish.title}</p>
                  <p>{dish.price}</p>
                  <img
                    width="100"
                    height="100"
                    src={dish.photo}
                    alt={dish.title}
                  />
                </div>
            ))}
        </>
    );
};

export default Home;
import {AppDispatch, RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getDishes} from '../DishesThunk';
import Spinner from '../../Components/UI/Spinner/Spinner';
import DishCard from '../DishCard/DishCard';

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
            <DishCard key={dish.id} dish={dish}/>
            ))}
        </>
    );
};

export default Home;
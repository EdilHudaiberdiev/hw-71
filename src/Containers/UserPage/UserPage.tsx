import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import {useEffect} from 'react';
import {getDishes} from '../DishesThunk';
import Spinner from '../../Components/UI/Spinner/Spinner';
import DishCard from '../../Components/DishCard/DishCard';
const UserPage = () => {


  const dishes = useSelector((state: RootState) => state.dishes.dishes);
  const isLoading = useSelector((state: RootState) => state.dishes.isLoading);
  const dispatch: AppDispatch = useDispatch();


  useEffect(() => {
    dispatch(getDishes());
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

export default UserPage;
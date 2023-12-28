import {AppDispatch, RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import {IDishesForm} from '../../types';
import {addDish} from '../DishesThunk';
import Spinner from '../../Components/UI/Spinner/Spinner';
import DishSendForm from '../../Components/DishSendForm/DishSendForm';

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
            <DishSendForm
              titleForm={'Add dish'}
              OneDish={OneDish}
              onFormSubmit={onFormSubmit}
              changeForm={changeForm}
              btnText='Add'
            />
          }
      </>
    );
};

export default AddNewDish;
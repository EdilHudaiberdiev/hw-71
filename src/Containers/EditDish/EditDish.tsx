import {AppDispatch, RootState} from '../../app/store';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import React, {useState} from 'react';
import {IDishes, IDishesForm} from '../../types';
import Spinner from '../../Components/UI/Spinner/Spinner';
import DishSendForm from '../../Components/DishSendForm/DishSendForm';
import {editDish} from '../DishesThunk';

const EditDish = () => {
  const params = useParams();
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

    if (params.id) {
      const dishCopy: IDishes = {
        ...OneDish,
        id: params.id,
      };

      try {
        await dispatch(editDish(dishCopy));
        Navigation('/');
      } catch (e) {
        alert('Something gone wrong');
      }
    }
  };

  return (
    <>
      {isLoading ? <Spinner/> :
        <DishSendForm
          titleForm={'Edit dish'}
          OneDish={OneDish}
          onFormSubmit={onFormSubmit}
          changeForm={changeForm}
          btnText='Edit'
        />
      }
    </>
  );
};

export default EditDish;
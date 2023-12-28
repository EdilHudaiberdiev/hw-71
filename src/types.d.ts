export interface IDishes {
    id: string;
    title: string;
    price: string;
    photo: string;
}

export interface IDishesForm {
    id: string
    title: string;
    price: string;
    photo: string;
}

export interface CartDish {
  dish: IDishes;
  amount: number;
}


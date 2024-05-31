// Перед названием указываем I для понимания, что это интерфейс

export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}
export interface IUsers {
  id: number;
  name: string;
  email: string;
  address: IAddress; // Интерфейс внутри интерфейса, т.к адрес - объект
}

// TODO

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

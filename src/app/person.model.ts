//create person interface
export interface IPerson {
  name: string;
  age: number;
  address: IAddress;
}

//create address interface
export interface IAddress {
  street: string;
  city: string;
  state: string;
}

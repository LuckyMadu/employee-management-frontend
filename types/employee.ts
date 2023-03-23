export interface IEmployee {
  _id: string;
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string;
  photo: string;
}

export interface IEmployeeProps {
  item: IEmployee;
}

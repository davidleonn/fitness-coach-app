export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Classes = "classes",
  Contact = "contact",
  Login = "login",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export interface User {
  email: string;
  name: string;
  surname: string;
  password: string;
}
export interface Client {
  id?: string;
  name: string;
  surname: string;
  age: number;
  email: string;
  createdAt?: string;
  objective?: string;
  diet: string;
  routine: string;
  description?: string;
}

import { IAddress, ICompany } from ".";

export interface IUser{
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address: IAddress,
    company: ICompany
  }

export interface User{
  uid: string;
  email: string;
  photoURL?: string;
  username: string;
  birth?: number;
  gender?: boolean;
  country?: number;
  phone?:{
    number:number,
    country:number
  };
  displayName:string
}

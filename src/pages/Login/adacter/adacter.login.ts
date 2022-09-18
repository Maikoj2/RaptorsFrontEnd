import {  ApiUserLogin, User } from '@/models';


export const loginAdacter = ({Data}: ApiUserLogin): User => {
  return {
    _id: Data.user._id,
    Names: Data.user.Names,
    email:  Data.user.email,
    token: Data.token,
    img:  Data.user.img,
    status: Data.user.status,
    role:  Data.user.role,
    createdAt: Data.user.createdAt,
    updatedAt: Data.user.updatedAt
   
  };
};
export interface IUserRootObject {
  name: string;
  registrationDate: string;
  imagePath: string;
  favoriteProducts: any[];
  feedbackReactions: any[];
  orders: any[];
  productFeedbacks: any[];
  id: string;
  userName: string;
  email: string;
  phoneNumber: string;
}
export interface IPassword {
  oldPassword: string;
  password: string;
}
export interface IUpdateUser {
  firstName: string;
  email: string;
  phone: string;
}

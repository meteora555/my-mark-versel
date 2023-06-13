import { IProductCard } from "../Products/types";

export interface CategoryResponseRootObject {
  category: ICategoryCard;
  products: IProductCard[];
  priceMin: number;
  priceMax: number;
  totalPage: number;
  totalCount: number;
  properties: IProperty[][];
  currentPage: number;
}

export interface ICategoryCard {
  id: string;
  title: string;
  imagePath: string;
  text: string;
}

export interface IProperty {
  propertyTypeId: string;
  propertyTypeName: string;
  value: string;
}

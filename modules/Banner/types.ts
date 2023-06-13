import { IService } from "../Services/types";

export interface MainRootObject {
  mainBanners: IMainBanner[];
  services: IService[];
}

export interface IMainBanner {
  id: string;
  title: string;
  imagePath: string;
  subtitle: string;
  link: string;
  textLink: string;
}

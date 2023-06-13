export interface IService {
  id: string;
  isActive: boolean;
  imagePath: string;
  text: string;
  title: string;
  link: string;
  description: string;
  servicesFaqs: IServicesFaq[];
}

export interface IServicesFaq {
  id: string;
  serviceId: string;
  question: string;
  answer: string;
  service: string;
}

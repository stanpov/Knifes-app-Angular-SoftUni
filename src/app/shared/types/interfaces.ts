export interface UserData {
    firstName: string;
    lastName: string;
    avatar: string;
    email: string;
    id?: string;
  }

export interface carouselImages {
  imageSrc: string,
  altTitle: string,
  id: string
}

export interface knifesData {
  img: string,
  price: number,
  category: string,
  quality: number,
  description: string,
  id: string,
  comments: string[]
}

export interface cardDataProduct {
  product: {
  img: string,
  price: number,
  category: string,
  quality: number,
  description: string,
  id: string,
  comments: string[]
  quantity: number
  }
  
}

export interface questionData {
  name: string,
  phone: number,
  email: string,
  questions: string,
  id: string
}
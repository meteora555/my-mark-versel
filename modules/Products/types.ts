export interface IProductDetail {
    id: string
    categoryId: string
    title: string
    imagePath: string
    price: number
    discountPrice: number | null
    maxCountForOrder: number
    color: string
    code: number
    rating: any
    description: string
    isPopular: boolean
    creationDate: string
    isFavorite: boolean
    isOrder: boolean
    priceColumns: wholesale[]
    productImages: ProductImages[]
    propertyValues: ProductFeature[]
}

export interface ProductFeature {
    "id": string
    "productId": string
    "propertyTypeId": string
    "propertyTypeName": string
    "value": string
    "propertyType": {
        "id": string
        "title": string
        "inFilter": boolean,
        "propertyValues": any[]
    }

}

export interface wholesale {
    "id": string,
    "productId": string,
    "initialAmount": number,
    "price": number
}

export interface IProductCard {
    id: string
    title: string
    imagePath: string
    price: number
    discountPrice: number | null
    isOrder: boolean
    isFavorite: boolean
}

export interface ProductSlider {
    title: string
    url: string
    nextName: string
    prevName: string
}

export type ISwiperTop = Omit<ProductSlider, "url">;

export interface ProductImages {
    "id": string,
    "productId": string,
    "imagePath": string
}

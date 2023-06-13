import {create} from "zustand";
import {IProductCard} from "@/modules/Products/types";
import {devtools, persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {removeDuplicates} from "@/src/helpers/removeDuplicate";

interface productStore {
    reviewed: IProductCard[]
    addProduct: (product: IProductCard) => void
    clearReviewed: () => void
}


export const useProductStore = create<productStore>()(persist(devtools(immer((setState) => ({
        reviewed: [],
        addProduct: (product) => setState(store => {
            store.reviewed.push(product)
            store.reviewed = removeDuplicates(store.reviewed)
        }),
        clearReviewed: () => setState(store => {
            store.reviewed.length = 0
        })
    }))), {name: 'ProductStore', version: 1}
))
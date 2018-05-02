import * as type from './../constants/index';

export const actAddProduct = (item, numberProduct) => {
    return {
        type: type.ADD_PRODUCT,
        item,
        numberProduct
    }
}

export const actListProduct = () => {
    return {
        type: type.LIST_PRODUCT
    }
}


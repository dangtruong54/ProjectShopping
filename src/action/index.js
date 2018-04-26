import * as type from './../constants/index';

export const actAddProduct = (item, numberProduct) => {
    return {
        type: type.ADD_PRODUCT,
        item,
        numberProduct
    }
}

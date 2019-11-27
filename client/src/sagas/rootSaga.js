import { takeLatest } from 'redux-saga/effects';

import ACTION from '../actions/actionsTypes/actionsTypes';
import {
    addProductToBasketSaga,
    deleteProductFromBasketSaga,
    productSearchSaga
} from './mainSaga'

function* rootSaga() {

    yield takeLatest(ACTION.ADD_PRODUCT_TO_BASKET, addProductToBasketSaga);
    yield takeLatest(ACTION.DELETE_PRODUCT_FROM_BASKET, deleteProductFromBasketSaga);

    yield takeLatest(ACTION.PRODUCT_SEARCH, productSearchSaga);

}

export default rootSaga;

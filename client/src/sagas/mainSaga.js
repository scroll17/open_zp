import ACTION from "../actions/actionsTypes/actionsTypes";

import { put, select } from 'redux-saga/effects';

import { cloneDeep, findLastIndex } from "lodash"

import moment from "moment"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import history from "../boot/browserHistory";
import { URL } from "../constants";

export function* addProductToBasketSaga({item, col}) {
    try {

        const { mainReducer: { basket: oldBasket } } = yield select();

        const newBasket = cloneDeep(oldBasket);
        const productIndex = findLastIndex( newBasket, product => product.id === item.id);

        if(productIndex >= 0){
            const productDate = moment(newBasket[productIndex].date);
            const nowDate = moment();

            if(productDate.isSame(nowDate, "days")){

                newBasket[productIndex].col += col;
                newBasket[productIndex].date = moment()

            }else{

                newBasket.push({
                    ...item,
                    col,
                    date: moment()
                });
            }
        }else{

            newBasket.push({
                ...item,
                col,
                date: moment()
            });
        }

        toast.success("Добавлено до кошику", {
            position: toast.POSITION.TOP_RIGHT
        });


        yield put({type: ACTION.NEW_PRODUCT_IN_A_BASKET, basket: newBasket});

    } catch (e) {
        yield put({type: ACTION.MAIN_ERROR, error: e})
    }
}

export function* deleteProductFromBasketSaga({item, col}) {
    try {

        const { mainReducer: { basket: oldBasket } } = yield select();


        const newBasket = cloneDeep(oldBasket);
        newBasket.forEach( (product, id) => {
           if(product.id === item.id){
               if(product.col <= col){

                   newBasket.splice(id, 1);

               }else {
                   newBasket[id].col -= col;
               }
           }
        });

        toast.error("Видалено з кошику", {
            position: toast.POSITION.TOP_RIGHT
        });

        yield put({type: ACTION.NEW_PRODUCT_IN_A_BASKET, basket: newBasket});

    } catch (e) {
        yield put({type: ACTION.MAIN_ERROR, error: e})
    }
}

export function* productSearchSaga({string}) {
    try {

        const { mainReducer: { allProduct, basket } } = yield select();

        const productFound = [];
        let arrayToSearch = [];


        if(history.location.pathname === URL.HOME){
            allProduct.forEach( categoriesWithProducts => {
                arrayToSearch.push(...categoriesWithProducts.products);
            });
        }else{
            arrayToSearch = [...basket]
        }


        arrayToSearch.forEach( product => {

            const productString = product.text.toLowerCase();
            const findString = string.toLowerCase();

            if(productString.includes(findString)){
                productFound.push(product)
            }
        });


        yield put({type: ACTION.PRODUCT_FOUND, productFound});

    } catch (e) {
        yield put({type: ACTION.MAIN_ERROR, error: e})
    }
}

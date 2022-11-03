import {createContext, useState, useEffect, useContext} from 'react';
import {DataStore} from 'aws-amplify';
import {Basket, BasketDish} from '../models';

const BasketContext = createContext({});

const BaskettContextProvider = ({ children }) => {
    return (
        <BasketContext.Provider>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContext;

export  useBasketContext = useContext(BasketContext);

import React,{createContext }from 'react';
import all_product from '../components/Assests/all_products';



export const ShopContext=createContext(null);
const ShopContextProvider =  (props)=>{
    contextValue={all_product};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>

    )
}
export default ShopContextProvider;
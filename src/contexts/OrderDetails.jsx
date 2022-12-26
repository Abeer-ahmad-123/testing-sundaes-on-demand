import { createContext, useContext, useState } from 'react';
import { pricePerItem } from '../constants/index';

const OrderDetails = createContext();

//create a custom hook to check we are in provider
export const useOrderDetails = () => {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error(
      'useOrderDetails must be called from within an OrderDetailsProvider'
    );
  }

  return context;
};

export const OrderDetailsProvider = (props) => {
  const [optionsCounts, setOptionsCounts] = useState({
    scoops: {}, //{chocolate:1,vanilla:2}
    toppings: {}, //{Gummy Bears: 1}
  });

  const updateItemCount = (itemName, newItemCount, optionType) => {
    // make a copy of exisiting state
    const newOptionCounts = { ...optionsCounts };

    //update the copy with new information
    newOptionCounts[optionType][itemName] = newItemCount;

    //update the state with the updated copy
    setOptionsCounts(newOptionCounts);
  };

  const resetOrder = () => {
    setOptionsCounts({ scoops: {}, toppings: {} });
  };

  //utility function to derice totals from optionsCOunts state value
  const calculateTotal = (optionsType) => {
    //get array of counts for the option type (eg 1,2)
    const countsArray = Object.values(optionsCounts[optionsType]);

    //total the calues in the array of counts fot the number of items
    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    //multiply the total number of items by the price for this type
    return totalCount * pricePerItem[optionsType];
  };

  const totals = {
    scoops: calculateTotal('scoops'),
    toppings: calculateTotal('toppings'),
  };

  const value = { optionsCounts, totals, updateItemCount, resetOrder };
  return <OrderDetails.Provider value={value} {...props} />;
};

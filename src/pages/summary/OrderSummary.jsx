import SummaryForm from './SummaryForm';
import { useOrderDetails } from '../../contexts/OrderDetails';
import { formatCurrency } from '../../utilities';

const OrderSummary = () => {
  const { totals, optionCounts } = useOrderDetails();

  const scoopsArray = Object.entries(optionCounts.scoops); // [[chocolate,2],[...]]
  const scoopsList = scoopsArray.map((key, value) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingArray = Object.entries(optionCounts.toppings); // [[chocolate,2],[...]]
  const toppingList = toppingArray.map((key) => <li key={key}>{key}</li>);
  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopsList}</ul>
      <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
      <ul>{toppingList}</ul>
      <SummaryForm />
    </div>
  );
};

export default OrderSummary;

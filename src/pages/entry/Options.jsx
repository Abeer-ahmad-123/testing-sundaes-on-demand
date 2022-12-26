import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOptions from './ScoopOptions';
import { Row } from 'react-bootstrap';
import ToppingsOption from './ToppingsOption';
import AlertBanner from '../common/AlertBanner';
import { pricePerItem } from '../../constants';

const Options = ({ optionsType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  //optionType is scoop and toppings
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionsType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, [optionsType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent =
    optionsType === 'scoops' ? ScoopOptions : ToppingsOption;

  const title =
    optionsType[0].toUpperCase() + optionsType.slice(1).toLowerCase();

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>${pricePerItem[optionsType]} each</p>
      <Row>{optionItems}</Row>
    </>
  );
};

export default Options;

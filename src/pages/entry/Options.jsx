import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOptions from './ScoopOptions';
import { Row } from 'react-bootstrap';
import ToppingsOption from './ToppingsOption';

const Options = ({ optionsType }) => {
  const [items, setItems] = useState([]);

  //optionType is scoop and toppings
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionsType}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {});
  }, [optionsType]);

  const ItemComponent =
    optionsType === 'scoops' ? ScoopOptions : ToppingsOption;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;

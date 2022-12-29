import { Col, Row, Form } from 'react-bootstrap';
import { useOrderDetails } from '../../contexts/OrderDetails';

const ScoopOptions = ({ name, imagePath }) => {
  const { updateItemCount } = useOrderDetails();
  const handleChange = (e) =>
    updateItemCount(name, parseInt(e.target.value), 'scoops');
  return (
    <Col sm={6} md={4} lg={3}>
      <img
        style={{ width: '15%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />

      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Form.Label>{name}</Form.Label>

        <Form.Control
          type="number"
          defaultValue={0}
          onChange={handleChange}
          style={{ width: '30%', marginLeft: '10px' }}
        />
      </Form.Group>
    </Col>
  );
};

export default ScoopOptions;

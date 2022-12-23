import { Col } from 'react-bootstrap';

const ScoopOptions = ({ name, imagePath }) => {
  return (
    <div>
      <Col sm={6} md={4} lg={3} style={{ display: 'flex' }}>
        <img
          style={{ width: '15%' }}
          src={`http://localhost:3030/${imagePath}`}
          alt={`${name} scoop`}
        />
        <p>{name}</p>
      </Col>
    </div>
  );
};

export default ScoopOptions;

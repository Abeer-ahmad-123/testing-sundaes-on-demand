import React, { useState } from 'react';
import { Form, Button, OverlayTrigger, Popover } from 'react-bootstrap';

const SummaryForm = ({ setOrderPhase }) => {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checboxLabel = (
    <span>
      I agree to &nbsp;
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    setOrderPhase('Completed');
  };
  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checboxLabel}
        />
      </Form.Group>
      <Button type="submit" disabled={!tcChecked} className="summaryButton">
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;

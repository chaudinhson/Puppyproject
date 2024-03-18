import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse4 = () => {
  const [open4, setOpen4] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen4(!open4)}
          aria-controls="example-collapse-text"
          aria-expanded={open4}
          className="faq-button1"
        >
          VACCINATION SCHEDULES FOR PUPPIES AND DOGS
        </Button>
      </div>

      <Collapse in={open4}>
        <div id="example-collapse-text">
          The following dog vaccination schedule is based on the recommendation
          of the Australian Veterinary Association (AVA). However, your local
          vet will advise on the recommended dog vaccination schedule for your
          pet.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse4;

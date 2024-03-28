import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse17 = () => {
  const [open17, setOpen17] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen17(!open17)}
          aria-controls="example-collapse-text"
          aria-expanded={open17}
          className="faq-button1"
        >
          WHEN SHOULD I SWITCH TO AN ADULT DOG FOOD ?
        </Button>
      </div>

      <Collapse in={open17}>
        <div id="example-collapse-text">
          SFor small- and medium-breed puppies, move to a high-quality adult
          formula such as EUKANUBA™ when he turns 1 year old. Large breed dogs
          should switch by the start of their second year.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse17;

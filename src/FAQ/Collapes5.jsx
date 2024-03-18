import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse5 = () => {
  const [open5, setOpen5] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen5(!open5)}
          aria-controls="example-collapse-text"
          aria-expanded={open5}
          className="faq-button1"
        >
          ‘OVER-VACCINATING’? TITRE TESTING MAY BE AN OPTION FOR YOU
        </Button>
      </div>

      <Collapse in={open5}>
        <div id="example-collapse-text">
          Over the last decade there has been increasing debate about the
          over-vaccination of pets. Depending on the vaccine used and the
          individual animal, immunity can last significantly longer than 12
          months. Some pet owners worry about vaccinating their pet whilst its
          immunisation is still sufficient.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse5;

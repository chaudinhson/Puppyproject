import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse7 = () => {
  const [open7, setOpen7] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen7(!open7)}
          aria-controls="example-collapse-text"
          aria-expanded={open7}
          className="faq-button1"
        >
          DOG AND PUPPY VACCINATIONS EXPLAINED
        </Button>
      </div>

      <Collapse in={open7}>
        <div id="example-collapse-text">
          The recommended puppy and dog vaccinations will help protect your dog
          against a number of very serious diseases. Below we outline some of
          the more common diseases and how vaccinations help prevent them.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse7;

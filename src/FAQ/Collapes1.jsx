import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse1 = () => {
  const [open1, setOpen1] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen1(!open1)}
          aria-controls="example-collapse-text"
          aria-expanded={open1}
          className="faq-button1"
        >
          WHY SHOULD YOU VACCINATE YOUR DOG OR PUPPY?
        </Button>
      </div>

      <Collapse in={open1}>
        <div id="example-collapse-text">
          Dog vaccinations will help your dog to be protected against some of
          the most common and most dangerous infectious diseases. For young dogs
          especially, it is critical to get the right vaccinations according to
          the puppy vaccination schedule to help build up their immunity.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse1;

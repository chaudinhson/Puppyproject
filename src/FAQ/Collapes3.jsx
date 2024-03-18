import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse3 = () => {
  const [open3, setOpen3] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen3(!open3)}
          aria-controls="example-collapse-text"
          aria-expanded={open3}
          className="faq-button1"
        >
          WHICH ARE THE MOST COMMON DOG AND PUPPY VACCINATION?
        </Button>
      </div>

      <Collapse in={open3}>
        <div id="example-collapse-text">
          The Australian Veterinary Association (AVA) splits recommended dog
          vaccinations into “core” and “non-core” vaccines.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse3;

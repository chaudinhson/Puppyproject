import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse13 = () => {
  const [open13, setOpen13] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen13(!open13)}
          aria-controls="example-collapse-text"
          aria-expanded={open13}
          className="faq-button1"
        >
          How Do I Introduce My New Puppy To The Resident Dog?
        </Button>
      </div>

      <Collapse in={open13}>
        <div id="example-collapse-text">
          Dogs usually adjust to a new companion, but choosing a dog of the
          opposite sex can improve compatibility. During introductions,
          supervise and prioritize showing affection to your older dog first. If
          your dog shows anxiety when left alone, explore treatments like herbal
          products or behavior modification. For more guidance, check my
          resources on Dog Training for Separation Anxiety.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse13;

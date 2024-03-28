import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse19 = () => {
  const [open19, setOpen19] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen19(!open19)}
          aria-controls="example-collapse-text"
          aria-expanded={open19}
          className="faq-button1"
        >
          HOW OFTEN SHOULD I GROOM AND/OR BATHE MY PET ?
        </Button>
      </div>

      <Collapse in={open19}>
        <div id="example-collapse-text">
          Longhaired breeds should be brushed out every day or so (give your dog
          a treat when you're done so he learns that grooming is rewarding).
          Bathe your dog when you notice an odor, but avoid overdoing it, as his
          skin is sensitive.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse19;

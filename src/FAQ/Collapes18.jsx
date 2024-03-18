import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse18 = () => {
  const [open18, setOpen18] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen18(!open18)}
          aria-controls="example-collapse-text"
          aria-expanded={open18}
          className="faq-button1"
        >
          How Often Should I Groom And/Or Bathe My Pet ?
        </Button>
      </div>

      <Collapse in={open18}>
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

export default Collapse18;

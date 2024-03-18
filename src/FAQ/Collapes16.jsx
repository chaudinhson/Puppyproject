import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse16 = () => {
  const [open16, setOpen16] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen16(!open16)}
          aria-controls="example-collapse-text"
          aria-expanded={open16}
          className="faq-button1"
        >
          ANY RECOMMENDATION FOR WHEN WE FIRST ARRIVE HOME WITH THE PUPPY
        </Button>
      </div>

      <Collapse in={open16}>
        <div id="example-collapse-text">
          Your pup should be given some time to relieve himself outside first,
          before bringing him inside. If he's too distracted and doesn't go,
          take him inside, but carry him, or only set him down for brief
          periods, then take him back outside. It's important that any
          elimination gets done in what is to be his regular potty area, or at
          the very least outside, that first time.Once your pup has relieved
          himself, feel free to allow him to explore a bit - carefully
          supervised, of course! He doesn't need to see the whole house, but an
          exploration of the main living areas will help him orient and adjust.
          It's fine, then, to offer a drink of water, but hold off on giving any
          food. Your pup will most likely need a nap after all the excitement,
          and very likely his stomach won't be ready for food until after that.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse16;

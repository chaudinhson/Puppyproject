import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse24 = () => {
  const [open24, setOpen24] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen24(!open24)}
          aria-controls="example-collapse-text"
          aria-expanded={open24}
          className="faq-button1"
        >
          DO I NEED TO PUPPY PROOF MY HOUSE? IF SO, HOW DO I DO IT?
        </Button>
      </div>

      <Collapse in={open24}>
        <div id="example-collapse-text">
          Puppies are like children. They love to learn and they’re inquisitive.
          And just like with children, you have to keep things they can chew on
          and swallow out of reach. So keep toys away, and don’t leave food
          where they can get to it, especially candy or foods that could make
          them sick. Keep trash cans secured or they will get into them and eat
          bones and beer bottle tops and other things that are dangerous. I
          can’t tell you how many beer bottle tops I’ve taken out of puppies’
          bellies.The biggest thing we see in our emergency room with puppies is
          that they’ve swallowed something. They swallow balls, a sock, a piece
          of a plastic toy. Puppies love to chew on plastic.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse24;

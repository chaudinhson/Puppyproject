import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse14 = () => {
  const [open14, setOpen14] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen14(!open14)}
          aria-controls="example-collapse-text"
          aria-expanded={open14}
          className="faq-button1"
        >
          WHY IS MY PUPPY ALWAYS LICKING/SCRATCHING HIMSELF?
        </Button>
      </div>

      <Collapse in={open14}>
        <div id="example-collapse-text">
          Constant licking and/or scratching and red, itchy skin or hair loss
          are all signs of dog allergies.I think it's important to point out in
          this Puppy FAQs page that dogs suffer from allergies just as people
          do!There are many different causes and triggers for dog allergies, but
          most result in skin problems and a variety of allergiesThese
          include:Flea allergyInhalant allergyDog food allergyContact
          allergyThere are many, many different ways to treat allergies in dogs,
          and of course the treatment depends on the trigger!
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse14;

import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse22 = () => {
  const [open22, setOpen22] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen22(!open22)}
          aria-controls="example-collapse-text"
          aria-expanded={open22}
          className="faq-button1"
        >
          HOW ARE THE NUTRITIONAL NEEDS FOR DIFFERENT PUPPIES' WEIGHT?
        </Button>
      </div>

      <Collapse in={open22}>
        <div id="example-collapse-text">
          Small-breed pups develop much faster than other breeds of dogs. They
          have faster metabolic rates and need higher levels of protein, fat,
          calcium, and phosphorus. Meanwhile, large-breed dogs aren't considered
          full grown until they're nearly 2 years old. And while many people
          think that large breeds should eat huge quantities of food, they
          simply need meals that pack a nutritional punch. (If overfed, these
          animals risk putting on too much weight too quickly and could develop
          skeletal problems.) The scientists at EUKANUBA™ have developed
          specific formulas for every size puppy so you'll be sure to know
          they've got all the nutrition they need to grow up healthy.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse22;

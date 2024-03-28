import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Collapse8 = () => {
  const [open8, setOpen8] = useState(false);
  return (
    <div className="container container1 mt-3">
      <div>
        <Button
          variant="primary"
          onClick={() => setOpen8(!open8)}
          aria-controls="example-collapse-text"
          aria-expanded={open8}
          className="faq-button1"
        >
          HOW DO I CHOOSE THE BEST PUPPY FOOD ?
        </Button>
      </div>

      <Collapse in={open8}>
        <div id="example-collapse-text">
          What you feed your puppy now has a direct effect on his future health,
          growth and development, so it's not surprising that I get asked a LOT
          of questions about diet and puppy food.Choose puppy kibble that has
          the wording 'a complete and balanced diet' on the package. This shows
          it meets the standards set by the AAFCO (Association of American Feed
          Control Officials).You need to be sure the dog food you pick has a
          good source of high quality protein as it's first ingredient. Chicken
          or Lamb are both good choices.Puppies grow very rapidly, and to
          support that growth they need a diet high in protein, fat, vitamins
          and minerals.Protein values should be around 25% plus and fat around
          15%. If you have a large breed or small breed puppy, look for a puppy
          food that is especially designed to meet their specific
          requirements.You can see a list of what I consider to be the best
          puppy foods on the market here - Best Puppy Food Choices, also check
          out my Puppy Food Reviews page.
        </div>
      </Collapse>
    </div>
  );
};

export default Collapse8;
